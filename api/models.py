from django.db import models


class CodingSample(models.Model):
    title = models.CharField(max_length=120)
    code = models.TextField()
    chart = models.ImageField(default='default.svg', upload_to='sample_charts')
    description = models.TextField()
    language = models.CharField(max_length=120)

    def __str__(self):
        return self.title
