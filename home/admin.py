from django.contrib import admin
from .models import SiteKV, SiteHot

# Register your models here.
admin.site.register(SiteKV)
admin.site.register(SiteHot)