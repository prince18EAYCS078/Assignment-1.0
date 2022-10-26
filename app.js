var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var data = [
    {
        firstName: "prince",
        middleName: "NA",
        lastName: "suman",
        email: "prince.suman@sourcefuse.com",
        phone: "6203571750",
        role: 1,
        address: "Bihar",
        id: 1
    },
    {
        firstName: "Sourav",
        middleName: "NA",
        lastName: "Bhargava",
        email: "Sourav.Bhargava@sourcefuse.com",
        phone: "8699900787",
        role: 2,
        address: "Mohali",
        id: 2
    },
    {
        firstName: "Meghna",
        middleName: "NA",
        lastName: "kashyap",
        email: "meghna.kashyap@sourcefuse.com",
        phone: "7834086997",
        role: 0,
        address: "Mohali",
        id: 3
    },
    {
        firstName: "Samarpan",
        middleName: "NA",
        lastName: "Bhattacharya",
        email: "samarpan.bhattacharya@sourcefuse.com",
        phone: "9999909854",
        role: 3,
        address: "Mohali",
        id: 4
    },
];
var role;
(function (role) {
    role[role["HR Recruiter"] = 0] = "HR Recruiter";
    role[role["Web-Apps Trainee"] = 1] = "Web-Apps Trainee";
    role[role["TechArch - (Web Apps)"] = 2] = "TechArch - (Web Apps)";
    role[role["Principal Architect"] = 3] = "Principal Architect";
})(role || (role = {}));
var userDataTable = /** @class */ (function () {
    function userDataTable(_data) {
        this.data = _data;
    }
    userDataTable.prototype.loadData = function () {
        var table = document.getElementById("dataTable");
        var rowCount = table.rows.length;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var employeeData = _a[_i];
            var row = table.insertRow(rowCount);
            var cellNum = 0;
            for (var colName in employeeData) {
                var newCell = row.insertCell(cellNum);
                if (cellNum != 7) {
                    newCell.innerHTML = "<p class=\"info-row-" + row.rowIndex + "\">" + (colName == "role"
                        ? role[employeeData[colName]]
                        : employeeData[colName]) + "</p><br>\n          <input type=\"text\" class=\"edit-info-row-" + row.rowIndex + "\" name=\"" + colName + "\" style=\"display:none\" value=\"" + (colName == "role"
                        ? role[employeeData[colName]]
                        : employeeData[colName]) + "\">";
                }
                else {
                    newCell.innerHTML = " <div id=\"normal-action-" + row.rowIndex + "\">\n          <button id=\"del-row-" + employeeData[colName] + "\" onclick=\"obj.deleteRow(" + row.rowIndex + ")\">del</button>\n          <button id=\"edit-row-" + employeeData[colName] + "\" onclick=\"obj.editRow(" + row.rowIndex + ")\">edit</button>\n      </div>\n      <div id=\"edit-action-" + row.rowIndex + "\" style=\"display:none\">\n          <button id=\"save-row-" + employeeData[colName] + "\" onclick=\"obj.save(" + row.rowIndex + ")\">save</button>\n          <button id=\"cancel-row-" + employeeData[colName] + "\" onclick=\"obj.cancel(" + row.rowIndex + ")\">cancel</button>\n      </div>";
                }
                cellNum++;
            }
            rowCount++;
        }
        document.getElementById("load").style.display = "none";
        document.getElementById("refresh").style.display = "inline";
    };
    userDataTable.prototype.deleteRow = function (rowNum) {
        this.data = __spreadArrays(this.data.slice(0, rowNum - 1), this.data.slice(rowNum));
        this.refreshData();
    };
    userDataTable.prototype.editRow = function (rowNum) {
        var editableRowInput = document.getElementsByClassName("edit-info-row-" + rowNum);
        var staticCellData = document.getElementsByClassName("info-row-" + rowNum);
        Array.from(editableRowInput).forEach(function (input) {
            input.style.display = "inline";
        });
        Array.from(staticCellData).forEach(function (input) {
            input.style.display = "none";
        });
        document.getElementById("normal-action-" + rowNum).style.display = "none";
        document.getElementById("edit-action-" + rowNum).style.display = "inline";
    };
    userDataTable.prototype.save = function (rowNum) {
        var _this = this;
        var editableRowInput = document.getElementsByClassName("edit-info-row-" + rowNum);
        Array.from(editableRowInput).forEach(function (input) {
            var value = input.value;
            input.name == "role"
                ? (_this.data[rowNum - 1][input.name] = role[value])
                : (_this.data[rowNum - 1][input.name] = value);
        });
        this.refreshData();
    };
    userDataTable.prototype.cancel = function (rowNum) {
        var editableRowInput = document.getElementsByClassName("edit-info-row-" + rowNum);
        var staticCellData = document.getElementsByClassName("info-row-" + rowNum);
        Array.from(editableRowInput).forEach(function (input) {
            input.style.display = "none";
        });
        Array.from(staticCellData).forEach(function (input) {
            input.style.display = "inline";
        });
        document.getElementById("normal-action-" + rowNum).style.display = "inline";
        document.getElementById("edit-action-" + rowNum).style.display = "none";
    };
    userDataTable.prototype.refreshData = function () {
        var table = document.getElementById("dataTable");
        while (table.rows.length !== 1) {
            table.deleteRow(1);
        }
        this.loadData();
    };
    return userDataTable;
}());
var obj = new userDataTable(data);
