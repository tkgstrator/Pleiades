<template>
  <div>
    <img alt="Web logo" src="../assets/logo.png" />
    <h1>応援コーナー</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="15"
              label="お名前(任意です)"
              optional
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="code"
              :rules="codeRules"
              :counter="16"
              label="ギフトコード(ハイフン不要)"
              onkeyup="this.value = this.value.toUpperCase()"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <button :disabled="!valid" @click="sendCode()">送信</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    code: "",
    nameRules: [v => v.length <= 15 || "名前は15文字以下です"],
    codeRules: [
      v => !!v || "ギフトコードは必須です",
      v => /^[A-Za-z0-9]*$/.test(v) || "ギフトコードが有効な形式ではありません",
      v =>
        v.length == 16 || "ギフトコードはハイフンなしで16桁である必要があります"
    ]
  }),
  methods: {
    sendCode() {
      let url =
        "https://hooks.slack.com/services/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";
      let body = {
        text: this.code,
        username: this.name == "" ? "匿名希望" : this.name
      };
      fetch(url, { method: "POST", body: JSON.stringify(body) });
      confirm("Thank you for your donation.");
    }
  }
};
</script>

<style>
.contents {
  margin-bottom: 30px;
}

.v-text-field {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 26px;
}

button {
  /* display: block; */
  border: solid;
  border-color: darkgray;
  border-radius: 1em;
  padding: 1em 1.5em 1em 1.5em;
}

img {
  width: 200px;
}
</style>