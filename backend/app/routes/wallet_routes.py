from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.late_wallet_model import LateWallet
from datetime import datetime

wallet_bp = Blueprint("wallet", __name__)

@wallet_bp.route("/me", methods=["GET"])
@jwt_required()
def my_wallet():
    user = get_jwt_identity()
    now = datetime.utcnow()

    wallet = LateWallet.query.filter_by(
        user_id=user["id"],
        month=now.month,
        year=now.year
    ).first()

    return jsonify({
        "monthly_limit": wallet.monthly_limit,
        "remaining_minutes": wallet.remaining_minutes
    })
