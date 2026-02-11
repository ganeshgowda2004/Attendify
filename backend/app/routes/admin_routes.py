from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.user_model import User
from app.models.late_wallet_model import LateWallet
from app import db
from datetime import datetime

admin_bp = Blueprint("admin", __name__)

def admin_only():
    user = get_jwt_identity()
    return user["role"] == "ADMIN"


# 👥 Get all employees
@admin_bp.route("/employees", methods=["GET"])
@jwt_required()
def get_employees():
    if not admin_only():
        return jsonify({"msg": "Unauthorized"}), 403

    users = User.query.filter_by(role="EMPLOYEE").all()

    data = []
    for u in users:
        data.append({
            "id": u.id,
            "name": u.name,
            "email": u.email
        })

    return jsonify(data)


# 📊 Monthly late wallet report
@admin_bp.route("/monthly-wallet", methods=["GET"])
@jwt_required()
def monthly_wallet():
    if not admin_only():
        return jsonify({"msg": "Unauthorized"}), 403

    now = datetime.utcnow()

    wallets = db.session.query(
        User.name,
        LateWallet.remaining_minutes,
        LateWallet.monthly_limit
    ).join(LateWallet, User.id == LateWallet.user_id)\
     .filter(
        LateWallet.month == now.month,
        LateWallet.year == now.year
     ).all()

    report = []
    for w in wallets:
        report.append({
            "name": w[0],
            "remaining": w[1],
            "limit": w[2]
        })

    return jsonify(report)
