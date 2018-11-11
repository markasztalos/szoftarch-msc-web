function Student(name, id) {
	var that = this;
	
	that.name = name;
	that.id = id;
	that.exam1 = ko.observable(0);
	that.exam2 = ko.observable(0);
	that.finalExam = ko.observable(0);
	that.homework = ko.observable(0);

	that.totalPoints = ko.computed(function () {
		return	Math.max(parseInt(that.exam1()), parseInt(that.exam2())) + parseInt(that.finalExam()) + parseInt(that.homework());
	});

	that.grade = ko.computed(function () {
		var total = that.totalPoints();
		if (total >= 85) { return 5; }
		if (total >= 70) { return 4; }
		if (total >= 55) { return 3; }
		if (total >= 40) { return 2; }
		return 1;
	});

};

function Semester(id) {
	var that = this;
	
	that.id = id;
	that.students = ko.observableArray([]);
}

function SoftArchViewModel() {
	var that = this;
	
	that.semesters = ko.observableArray([
		new Semester("2013"),
		new Semester("2014"),
		new Semester("2015")
	]);

	that.selectedSemester = ko.observable(null);
	
	that.studentsOfCurrentSemester = ko.computed(function () {
		return that.selectedSemester() ? that.selectedSemester().students() : [];
	});
	
	that.newStudentName = ko.observable(null);
	that.newStudentId = ko.observable(null);

	that.canAddNewStudent = ko.computed(function () {
		var newName = that.newStudentName();
		var newId = that.newStudentId();
		var currentSemester = that.selectedSemester();
		var students = that.studentsOfCurrentSemester();
		if (!currentSemester) {
			return false;
		}
		if (!newName || !newId ) {
			return false;
		}
		
		var filteredList = ko.utils.arrayFilter(students, function (student) {
				return student.id.toLowerCase() == newId.toLowerCase();
			});
		if (filteredList.length > 0) {
			return false;
		}
		
		return true;
	});

	that.addNewStudent = function () {
		var newName = that.newStudentName();
		var newId = that.newStudentId();
		that.selectedSemester().students.push(new Student(newName, newId));
		
	};
	
	that.deleteStudent = function(student) {
		that.selectedSemester().students.remove(student);
	}
}

