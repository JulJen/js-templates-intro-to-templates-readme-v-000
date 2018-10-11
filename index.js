// pass any comment text and commenter to them and build out a fully-formed, well-formatted comment div without having to worry about hand creating the tags every time.


function addComment() {

  //Since we don't want to reload the page and we're writing some JavaScript to take care of the form submission, we prevent the default action.
  event.preventDefault();
  let bodyText = document.getElementById("commentText").value;
  let commenter = document.getElementById("commenterName").value;

  let commentBody = createCommentBody(bodyText);
  let commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}


function createCommentBody(comment) {

  let bodyDiv = document.createElement("div");
  let bodyPara = document.createElement("p");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);

  return bodyDiv;
}

function createCommenterLabel(commenter) {

  let commenterDiv = document.createElement("div");
  let commenterLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by: ";
  let commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);

  return commenterDiv;
}

function postNewComment(body, commenter) {
  let commentsDiv = document.getElementById("comments");
  let newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  commentsDiv.appendChild(newCommentDiv);
}
