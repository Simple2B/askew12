from django.contrib import admin
from api.models import CodingSample


class CodingSampleAdmin(admin.ModelAdmin):
    list_display = ('title', 'language')


admin.site.register(CodingSample, CodingSampleAdmin)
