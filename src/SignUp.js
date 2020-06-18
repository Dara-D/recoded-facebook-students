import React from "react";
import db from "./firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import firebase from "firebase";

const SignUpPage = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result);
      console.log("Success...!");
    })
    .catch(function (error) {
      console.log(error);
      console.log("This has failed :(");
  });

  
  async function handleSubmit(props) {
    // const res = await db.collection('profiles').get()
    // const data = res.docs.map((el) => el.data());
    // console.log(data)


    // await db.collection("profiles").doc("userId").add({ imageUrl: "imageUrl"});

    // await db
    //   .collection("profiles").doc("FXFuISqWRMcsZmww8HI3M3WuFP02")
    //   .update({
    //     imageUrl: props.user.multiFactor.photoURL,
    //     city: props.city,
    //     name: props.user.b.displayName,
    //     userId: props.user.u.uid,
    //   });

    // await db
    //   .collection("profiles")
    //   .doc("userId")
    //   .update({ "city": profiles.city });

    // db.collection("profiles").doc("userId").add({ user: user.displayname});
    await db
    .collection("profiles").doc("userId")
    .update({
      imageUrl: "imageUrl",
      city: "city",
      name: "name",
      userId: "userId",
    });
    // // userId: The unique user ID (available via Google. Please don't make a user ID yourself).
    // db.collection("profiles").doc("userId").add({ city: "city"});
  }
  handleSubmit();

  return (
    <Form >
      <Button variant="outline-success" type="submit">
        Log in with Google!
      </Button>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Write your city name" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Profile </Form.Label>
        <Form.Control type="text" placeholder="Write something about you" />
      </Form.Group>

      <Button variant="outline-success" type="submit" onSubmit={handleSubmit}>
        join The Re:Coded facebook!
      </Button>
    </Form>
  );
};

export default SignUpPage;
