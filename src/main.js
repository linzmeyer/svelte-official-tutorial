import App from './App.svelte';

const myMap = new Map();
const app = new App({
	target: document.body,
	props: {
		word: 'bird'
	}
});

