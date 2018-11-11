var viewModel = new SoftArchViewModel();
QUnit.test( "hello test", function( assert ) {
  viewModel.selectedSemester(viewModel.semesters()[0]);
    
  viewModel.newStudentId("8");
  viewModel.newStudentName("XY");

  assert.equal(viewModel.canAddNewStudent(), true, "Student can be added");

  viewModel.addNewStudent();
    
  assert.equal(viewModel.canAddNewStudent(), false, "Student ID should be unique");
  
  
});