<template>
  <div>
    <vue-advanced-chat
      height="calc(100vh - 30vh)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </div>
</template>

<script>
import { register } from 'vue-advanced-chat'
// import { register } from '../../vue-advanced-chat/dist/vue-advanced-chat.es.js'
register()

export default {
  name: 'ChatView',
  data () {
    return {
      currentUserId: '1234',
      rooms: [
        {
          roomId: '1',
          roomName: 'Support',
          avatar:
            'https://w7.pngwing.com/pngs/869/765/png-transparent-technical-support-hotel-grand-filippo-computer-icons-information-technology-bellhop-service-computer-silhouette.png',
          users: [
            { _id: '1234', username: 'John Doe' },
            { _id: '4321', username: 'John Snow' }
          ]
        }
      ],
      messages: [],
      messagesLoaded: false
    }
  },

  methods: {
    fetchMessages ({ options = {} }) {
      setTimeout(() => {
        if (options.reset) {
          this.messages = this.addMessages(true)
        } else {
          this.messages = [...this.addMessages(), ...this.messages]
          this.messagesLoaded = true
        }
        // this.addNewMessage()
      })
    },

    addMessages (reset) {
      const messages = []

      for (let i = 0; i < 2; i++) {
        if (i === 0) {
          messages.push({
            _id: reset ? i : this.messages.length + i,
            content: `${reset ? '' : 'paginated'} Olá!`,
            senderId: '4321',
            username: 'John Doe',
            date: '13 November',
            timestamp: '10:20'
          })
        }
        if (i === 1) {
          messages.push({
            _id: reset ? i : this.messages.length + i,
            content: `${reset ? '' : 'paginated'} Posso ajudar?`,
            senderId: '4321',
            username: 'John Doe',
            date: '13 November',
            timestamp: '10:20'
          })
        }
      }

      return messages
    },

    sendMessage (message) {
      this.messages = [
        ...this.messages,
        {
          _id: this.messages.length,
          content: message.content,
          senderId: this.currentUserId,
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
    },

    addNewMessage () {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: 'NEW MESSAGE',
            senderId: '1234',
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString()
          }
        ]
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: "Quicksand", sans-serif;
}
</style>
