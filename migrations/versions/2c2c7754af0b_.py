"""empty message

<<<<<<< HEAD:migrations/versions/d98cf27f1968_.py
<<<<<<< HEAD:migrations/versions/39d40380b721_.py
Revision ID: 39d40380b721
Revises: 
Create Date: 2021-03-23 16:35:51.250443
=======
Revision ID: d98cf27f1968
Revises: 
Create Date: 2021-03-23 16:24:43.124104
>>>>>>> 3eb30c5d5aafbb288ce2cd045fb560c34e60dc22:migrations/versions/d98cf27f1968_.py
=======
Revision ID: 2c2c7754af0b
Revises: 
Create Date: 2021-03-23 20:28:22.726782
>>>>>>> 12f400ef7720483967788419b9780be5d7af1f56:migrations/versions/2c2c7754af0b_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/d98cf27f1968_.py
<<<<<<< HEAD:migrations/versions/39d40380b721_.py
revision = '39d40380b721'
=======
revision = 'd98cf27f1968'
>>>>>>> 3eb30c5d5aafbb288ce2cd045fb560c34e60dc22:migrations/versions/d98cf27f1968_.py
=======
revision = '2c2c7754af0b'
>>>>>>> 12f400ef7720483967788419b9780be5d7af1f56:migrations/versions/2c2c7754af0b_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=200), nullable=False),
    sa.Column('last_name', sa.String(length=200), nullable=False),
    sa.Column('email', sa.String(length=250), nullable=True),
    sa.Column('password', sa.String(length=250), nullable=False),
    sa.Column('birthday', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('favorite',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cocktail_id', sa.Integer(), nullable=False),
    sa.Column('cocktail_name', sa.String(length=250), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorite')
    op.drop_table('user')
    # ### end Alembic commands ###