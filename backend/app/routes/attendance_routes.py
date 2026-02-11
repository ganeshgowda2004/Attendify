from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.attendance_model import Attendance

attendance_bp = Blueprint("attendance", __name__)

@attendance_bp.route("/list")
@jwt_required()
def list_attendance():
    user_id = get_jwt_identity()
    data = Attendance.query.filter_by(user_id=user_id).all()

    return jsonify([
        {"date": a.date, "status": a.status}
        for a in data
    ])
