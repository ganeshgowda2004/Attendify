from datetime import datetime
from app import db
from app.models.late_wallet_model import LateWallet

def get_or_create_wallet(user_id):
    now = datetime.utcnow()

    wallet = LateWallet.query.filter_by(
        user_id=user_id,
        month=now.month,
        year=now.year
    ).first()

    if not wallet:
        wallet = LateWallet(
            user_id=user_id,
            month=now.month,
            year=now.year,
            monthly_limit=120,
            remaining_minutes=120
        )
        db.session.add(wallet)
        db.session.commit()

    return wallet


def deduct_late_minutes(user_id, late_minutes):
    wallet = get_or_create_wallet(user_id)

    wallet.remaining_minutes -= late_minutes
    db.session.commit()

    if wallet.remaining_minutes <= 0:
        return "LIMIT_EXCEEDED"

    return "OK"
