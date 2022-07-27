<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const resp = await fetch('/', {
      headers: {
        accept: 'application/json'
      }
    })
    const data = await resp.json()
    const { value } = data

    return {
      stuff: {
        value
      }
    };
  }
</script>

<p>__layout.svelte</p>

<slot></slot>