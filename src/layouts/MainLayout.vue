<template lang="pug">
QLayout.bg-grey-2(view="hHh lpr lFf")
	QHeader(elevated)
		QToolbar
			QBtn(v-if="$q.screen.lt.md" flat dense round icon="sym_o_menu" ariaLabel="Menu" @click="toggleLeftDrawer")
			QToolbarTitle Psevertson's Home Page

	QDrawer.bg-grey-2(v-model="leftDrawerOpen" showIfAbove bordered)
		QList(separator)
			QItem(clickable target="_blank" href="https://github.com/psevertson")
				QItemSection(avatar)
					QIcon(name="sym_o_person")
				QItemSection
					QItemLabel(caption) Created By
					QItemLabel Porter Severtson
			QItem(clickable target="_blank" href="https://github.com/psevertson/psevertson.github.io/issues")
				QItemSection(avatar)
					QIcon(name="sym_o_feedback")
				QItemSection
					QItemLabel Submit Feedback

	QPageContainer
		QPage
			.scroll-y.absolute-full.q-py-md.column.no-wrap.q-gutter-y-md.items-center
				h2.q-mt-xl Awesome Projects
				template(v-for="row in data" :key="row.name")
					QCard.q-pa-sm(bordered style="width: 500px; max-width: 90vw")
						QCardSection(horizontal)
							.col.q-pa-md
								.text-h5.q-mb-xs {{ row.name }}
								.text-caption.text-grey {{ row.description }}
							QSeparator(vertical)
							QCardActions.justify-center(vertical)
								QBtn(flat round color="primary" icon="sym_o_link" target="_blank" :href="row.link")
</template>

<script setup lang="ts">
import { ref } from "vue"

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
	leftDrawerOpen.value = !leftDrawerOpen.value
}

const data = ref([
	{
		name: "Birthday Freebies",
		description: "Awesome list of Birthday Deals, Coupons, and Freebies",
		link: "/birthday-freebies",
	},
])
</script>
