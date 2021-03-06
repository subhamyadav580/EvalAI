# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2020-03-22 23:43
from __future__ import unicode_literals

import base.utils
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        (
            "challenges",
            "0060_modify_environment_image_field_in_challenge_phase_model",
        )
    ]

    operations = [
        migrations.CreateModel(
            name="ChallengeEvaluationCluster",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("modified_at", models.DateTimeField(auto_now=True)),
                (
                    "name",
                    models.CharField(
                        db_index=True, max_length=200, unique=True
                    ),
                ),
                (
                    "cluster_yaml",
                    models.FileField(
                        upload_to=base.utils.RandomFileName("cluster_yaml")
                    ),
                ),
                (
                    "kube_config",
                    models.FileField(
                        blank=True,
                        null=True,
                        upload_to=base.utils.RandomFileName("kube_config"),
                    ),
                ),
                (
                    "challenge",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="challenges.Challenge",
                    ),
                ),
            ],
            options={"db_table": "challenge_evaluation_cluster"},
        )
    ]
