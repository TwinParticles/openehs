﻿/// <reference path="../jquery-1.4.4.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../jquery.ui.js" />
/// <reference path="../jquery-jvert-tabs-1.1.4.js" />

$(function () {

    // ------------------------------------------------- //
    //  Setup Surgery Tab                                //
    // ------------------------------------------------- //

    $("#submitSurgery").button().click(function () {
        $.ajax({
            type: "POST",
            url: "/Patient/AddSurgery",
            data: {
                patientID: $("#patientId").val(),
                surgeon: $("select[name='surgeonSelect'] option:selected").val(),
                surgeonAssistant: $("select[name='surgeonAssistantSelect'] option:selected").val(),
                anaesthetist: $("select[name='anaesthetistSelect'] option:selected").val(),
                anaesthetistAssistant: $("select[name='anaesthetistAssistantSelect'] option:selected").val(),
                nurse: $("select[name='nurseSelect'] option:selected").val(),
                consultant: $("select[name='consultantSelect'] option:selected").val(),
                startTime: $("#surgeryStartTime").val(),
                endTime: $("#surgeryEndTime").val(),
                theatreNumber: $("select[name='theatreNumber'] option:selected").val(),
                caseType: $("input:radio[name='modal_caseType']:checked").val()
            },
            success: function (response) {
                alert("Surgery Submitted");


                $("#modal_GetStaffSurgeon").val(""),
                $("#modal_GetStaffSurgeonAssistant").val(""),
                $("#modal_GetStaffAnaesthetist").val(""),
                $("#modal_GetStaffAnaesthetistAssistant").val(""),
                $("#modal_GetStaffNurse").val(""),
                $("#modal_GetStaffConsultant").val(""),
                $("#surgeryStartTime").val(""),
                $("#surgeryEndTime").val(""),
                $("#modal_GetSurgeryLocation").val(""),
                $("#caseType1").val(""),
                $("#caseType2").val("")

            },
            dataType: "json"
        });
    });

    $("#surgeryEndTime").timepicker({});

    $("#surgeryStartTime").timepicker({});

    $("#caseTypeRadio").buttonset();

    var ckConfig = {
        toolbar: [
            ["Bold", "Italic", "-", "NumberedList", "BulletedList", "-"],
            ["UIColor"]
        ],
        extraPlugins: "autogrow",
        autoGrow_maxHeight: 800
    };
    $("#surgeryNoteTextBox").ckeditor(ckConfig);

});