<script lang="ts">
	import { iconToSVG, iconToHTML, replaceIDs, getIconData } from '@iconify/utils';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const icons = $derived(Object.entries(data.iconData.icons));
</script>

{#each icons as [name]}
	{@const iconData = getIconData(data.iconData, name)}
	{#if iconData}
		{@const renderData = iconToSVG(iconData, { height: 'auto' })}
		<div
			class="inline-block p-3 hover:border-neutral-200 hover:bg-neutral-50 rounded border border-transparent"
			style="content-visibility: auto;"
		>
			{@html iconToHTML(replaceIDs(renderData.body), renderData.attributes)}
		</div>
	{/if}
{/each}
