<template>
  <div>
    <h1>{{ repoName }}</h1>
    <ul>
      <li v-for="file in files" :key="file.name">
        <a :href="file.url" target="_blank">{{ file.name }}</a>
      </li>
    </ul>
    <ul>
      <li v-for="folder in folders" :key="folder.name">
        <router-link :to="{ path: `/${folder.name}` }">{{ folder.name }}</router-link>
        <repository-structure v-if="folder.children" :files="folder.children.files" :folders="folder.children.folders" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['repoName', 'files', 'folders'],
  name: 'RepositoryStructure'
}
</script>