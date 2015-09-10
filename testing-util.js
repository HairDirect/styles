$('<style type="text/css"> .round-button-active { background-color: #5088ba; } </style>').appendTo(document.head);

$(document).on('click','label.card', function (event) {
		  var $this = $(this);
		  $(this).children(":first").toggleClass("round-button-active");
		  evt.preventDefault()
  //alert('Clicked');
});