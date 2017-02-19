from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel


class SubmissionPage(Page):
    artifact_materials = RichTextField()

    content_panels = Page.content_panels + [
        FieldPanel('artifact_materials'),
    ]
    api_fields = [
        'artifact_materials',
    ]
