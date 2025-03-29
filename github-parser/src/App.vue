<template>
  <div id="app">
    <repository-structure :repo-name="repoName" :files="files" :folders="folders" />
  </div>
</template>

<script>
import RepositoryStructure from "@/components/RepositoryStructure.vue"

export default {
  components: {
    RepositoryStructure
  },
  data() {
    return {
      repoName: 'repository',
      files: [],
      folders: []
    }
  },
  mounted() {
    this.getRepositoryContents('username', 'repository')
  },
  methods: {
    async getRepositoryContents(owner, repo) {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`)
      const contents = await response.json()

      contents.forEach(item => {
        if (item.type === 'file') {
          this.files.push({ name: item.name, url: item.html_url })
        } else if (item.type === 'dir') {
          const folder = { name: item.name, children: { files: [], folders: [] } }
          this.folders.push(folder)
          this.getFolderContents(owner, repo, item.name, folder.children)
        }
      })
    },
    async getFolderContents(owner, repo, folderName, children) {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folderName}`)
      const contents = await response.json()

      contents.forEach(item => {
        if (item.type === 'file') {
          children.files.push({ name: item.name, url: item.html_url })
        } else if (item.type === 'dir') {
          const subfolder = { name: item.name, children: { files: [], folders: [] } }
          children.folders.push(subfolder)
          this.getFolderContents(owner, repo, `${folderName}/${item.name}`, subfolder.children)
        }
      })
    }
  }
}
</script>

<style>
/* Add your styles here */
</style>