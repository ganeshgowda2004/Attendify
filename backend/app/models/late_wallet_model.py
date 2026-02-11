from app import db
from datetime import datetime

class LateWallet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    monthly_limit = db.Column(db.Integer, default=120)   # minutes
    remaining_minutes = db.Column(db.Integer, default=120)

    month = db.Column(db.Integer)
    year = db.Column(db.Integer)

    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
