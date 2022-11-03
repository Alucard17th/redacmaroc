<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- <p>{{message}}</p>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="PLAGIAT : comme toute contrefaçon, le plagiat est puni, conformément au code 
        de propriété intellectuelle de 3 ans d'emprisonnement et de 300 000 euros d'amende, vu les 
        recrudescences d'escrocs, nous n'hésiterons pas nous et nos clients à porter plainte.">
        <b-form-textarea id="input-1" name="redaction" placeholder="Enter something..." rows="3" max-rows="6">
        </b-form-textarea>
      </b-form-group> -->
      <b-form-group>
        <p>PLAGIAT : comme toute contrefaçon, le plagiat est puni, conformément au code 
        de propriété intellectuelle de 3 ans d'emprisonnement et de 300 000 euros d'amende, vu les 
        recrudescences d'escrocs, nous n'hésiterons pas nous et nos clients à porter plainte</p>
        <editor :options=defaultOptions ref="toastuiEditor" class="mb-3" />
      </b-form-group>
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { Editor } from '@toast-ui/vue-editor'
export default {
  components: {
    'editor': Editor
  },
  data() {
    return {
      form: {
        redaction: '',
      },
      redaction: '',
      message: "Rédigez un article de 220 mots minimum et 250 mots maximum sur le sujet de votre choix. Nous évaluons la qualité en fonction des critères suivants : orthographe, grammaire, tournure et sens, mais aussi sur la rédaction SEO (sémantique, mot clef, structuration d'un texte en sous titre et paragraphe), qui est la base pour tout rédacteur web.Veuillez n’insérer aucune balise html (<h1>, <h2>, <p>, <strong>, etc.) mais utiliser le menu de l’éditeur : Formats situé sur la 2e ligne.En-tête pour les sous-titres, En ligne pour le gras et Bloc pour les paragraphes.Pensez à garder une copie de votre test dans l'éventualité où nous ne le recevrions pas afin de pouvoir nous le transmettre par mail si besoin.",
      show: true,
      defaultOptions: {
        minHeight: '200px',
        language: 'en-US',
        useCommandShortcut: true,
        usageStatistics: true,
        hideModeSwitch: true,
        toolbarItems: [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol'],
          ['table', 'image', 'link'],
          // ['code', 'codeblock'],
          ['scrollSync'],
        ]
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))
      // const { redaction } = Object.fromEntries(new FormData(event.target));
      // this.redaction = redaction
      // console.log(this.redaction)
      let html = this.$refs.toastuiEditor.invoke('getHTML');
      this.$store.dispatch("sendTest", html)
      console.log(html)
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>