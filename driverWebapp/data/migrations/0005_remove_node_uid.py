# Generated by Django 2.0.9 on 2018-11-25 03:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_node_uid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='node',
            name='UId',
        ),
    ]
