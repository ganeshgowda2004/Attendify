from app import db

class Justification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    attendance_id = db.Column(db.Integer)
    reason = db.Column(db.Text)
    status = db.Column(db.String(20), default="PENDING")
