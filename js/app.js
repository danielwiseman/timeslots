$(function() {
	
	var data = {
		'1pm':'',
		'2pm':'',
		'3pm':''
	}

	function updateData() {
		var time = $('select[name=timeselect]').val();
		var fullname = $('input[name=fullname]').val();
		data.time = fullname;
		$('#' + time).siblings('.name').html(fullname).addClass('closed');
	}

	function initPopulate() {
		for (i in data) {
			$('#schedule').append('<tr><td id="' + i + '" class="time">' + i + '</td><td class="name">' + data[i] + '</td></tr>');
			if (!data[i]) {
				$('select[name=timeselect]').append('<option value="' + i + '">' + i + '</option>');
			}
		}
	}

	initPopulate();
	
	$('#timesubmit').on('click', updateData);
	
});