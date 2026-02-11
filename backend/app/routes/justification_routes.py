from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models.justification_model import Justification

justification_bp = Blueprint("justification", __name__)

@justification_bp.route("/create", methods=["POST"])
@jwt_required()
def create():
    user_id = get_jwt_identity()
    data = request.json

    j = Justification(
        user_id=user_id,
        attendance_id=data["attendance_id"],
        reason=data["reason"]
    )
    db.session.add(j)
    db.session.commit()

    return jsonify(msg="Submitted")
