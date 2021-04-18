<template>
    <div>
        <a :href="url" rel="noopener noreferrer" target="_blank">{{ text }}</a>
    </div>
</template>

<script>
export default ({
    name: 'BasicLink',
    props: {
    text: String,
    url: String
  }
})
</script>
