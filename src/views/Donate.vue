<template>
  <div>
    <img alt="Web logo" src="../assets/logo.png" />
    <h1>応援コーナー</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="15"
              label="お名前(任意です)"
              optional
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="code"
              :rules="codeRules"
              :counter="14"
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
import { db } from "../plugins/firebase";

export default {
  data: () => ({
    valid: false,
    name: "",
    code: "",
    webhook: null,
    nameRules: [v => v.length <= 15 || "名前は15文字以下です"],
    codeRules: [
      v => !!v || "ギフトコードは必須です",
      v => /^[A-Za-z0-9]*$/.test(v) || "ギフトコードが有効な形式ではありません",
      v =>
        v.length == 14 || "ギフトコードはハイフンなしで14桁である必要があります"
    ]
  }),
  methods: {
    sendCode() {
      let url = this.webhook["incoming"];
      let body = {
        text: this.name + ": " + this.code
      };
      fetch(url, { method: "POST", body: JSON.stringify(body) }).then(function(
        response
      ) {
        if (response["ok"]) {
          confirm("応援ありがとうございました");
        } else {
          confirm("コード送信に失敗しました");
        }
      });
    }
  },
  firestore() {
    return {
      webhook: db.collection("webhook").doc("8SnQUOqsPn9zZbs47BHC")
    };
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