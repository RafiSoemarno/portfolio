<script lang="ts">
    export let image;
    export let title;
    export let description;
    export let link;
</script>

<a href="{link}" target="_blank">
    <div class="flex flex-row gap-5 bg-white bg-opacity-10 rounded-3xl p-2 pr-6 select-none">
        <img src={image} alt="" class="left-0 rounded-2xl">
        <div class="flex flex-col gap-2 py-4">
            <h1 class="font-bold">{title}</h1>
            <p class="text-white opacity-50">{description}</p>
        </div>
    </div>
</a>