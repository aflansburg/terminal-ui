<script lang="ts">
	import citadelImg from "../assets/icons/citadel.png";
	export let className = "";
</script>

<img
	src={citadelImg}
	alt="Rick and Morty"
	class={`h-6 w-6 ${className} transition-all duration-200 rounded-sm object-cover hover:scale-110`}
/>
