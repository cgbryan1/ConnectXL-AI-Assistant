"""Package for all models in the application."""

from .application import Application
from .pagination import Paginated, PaginationParams, EventPaginationParams
from .permission import Permission
from .user import User, ProfileForm
from .user_details import UserDetails
from .unregistered_user import UnregisteredUser
from .role import Role

from .role_details import RoleDetails
from .organization import Organization
from .event import EventOverview, EventDraft
from .public_user import PublicUser
from .room import Room
from .room_details import RoomDetails
from .signage import SignageOverviewFast, SignageOverviewSlow
from .event_registration import (
    EventRegistration,
    NewEventRegistration,
)
from .coworking.students import Students
from .registration_type import RegistrationType

# from .ai_audit_log import AIAuditLogModel

__authors__ = ["Kris Jordan"]
__copyright__ = "Copyright 2023"
__license__ = "MIT"
