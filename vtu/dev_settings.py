from .base_settings import *

SECRET_KEY = 'django-insecure-6tlb^&2m)m$&w37f#6=($mj^#7-c=7$-&ijax5%ey32@91m_%b'

# SECURITY WARNING: don't run with debug turned on in production!




# THIRD PARTY APPS
# INSTALLED_APPS += [
   
# ]

DEBUG = True


STATIC_URL = '/static/'

STATICFILES_DIRS = [
    BASE_DIR / 'static'
]


STATIC_ROOT = BASE_DIR / 'staticfiles'


MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

if not DEBUG:
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

INTERNAL_IPS = [
    "127.0.0.1",
]
