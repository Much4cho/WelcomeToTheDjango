# Generated by Django 2.0.9 on 2018-11-25 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_in_out'),
    ]

    operations = [
        migrations.AddField(
            model_name='node',
            name='UId',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]