//////////////////INITIALIZING VARIABLES AND SETTING UP INITIAL VISIT TO SITE///////////////

//  SETUP
// Hide the Extra Data div for each expander, and form
$(document.getElementById("hoverForm")).hide();
$("#HideGift").hide();
$("#HidePurchase").hide();
$("#HideBudget").hide();
$("#HideIncome").hide();
//  INITIALIZING
//      Enums
var DropDownOptions = {
    AddBudgetType: 'Add Budget Type',
    AddJob: 'Add Job',
    ListBudgetTypes: 'Budget Types',
    ListGiftCards: 'Gift Cards',
    ListJobs: 'Jobs',
    ScenarioChecker: 'Scenario Checker'
};







//////////////////EXPANDERS////////////////////////////
//Expander Expanding Events/////////////////////////////////////
$("#GiftCardPurchaseExpander").on("click", function () {
    $("#HideGift").slideToggle();
    $("#GiftCardPurchaseExpander").toggleClass("MainDropBarArrowSide");
    $("#GiftCardPurchaseExpander").toggleClass("MainDropBarArrowDown");
});
$("#PurchaseExpander").on("click", function () {
    $("#HidePurchase").slideToggle();
    $("#PurchaseExpander").toggleClass("MainDropBarArrowSide");
    $("#PurchaseExpander").toggleClass("MainDropBarArrowDown");
});
$("#BudgetExpander").on("click", function () {
    $("#HideBudget").slideToggle();
    $("#BudgetExpander").toggleClass("MainDropBarArrowSide");
    $("#BudgetExpander").toggleClass("MainDropBarArrowDown");
});
$("#IncomeExpander").on("click", function () {
    $("#HideIncome").slideToggle();
    $("#IncomeExpander").toggleClass("MainDropBarArrowSide");
    $("#IncomeExpander").toggleClass("MainDropBarArrowDown");
});


function SetupIncomeExpander() {
    var innerIncomeRows = "";
    incomeList.forEach(function (item) {
        innerIncomeRows += `
                    <div class="MainDropContent" data-IncomeId="` + item.id + `" >
                        <div class="MainDropContent1 ClickableIncome">` + item.source + `</div>
                        <div class="MainDropContent1">$` + item.amount + `</div>
                        <div class="MainDropContent1">` + item.date + `</div>
                    </div>
                `;
    });

    var innerIncomeStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Source</div>
                    <div class="MainDropContent1">Amount</div>
                    <div class="MainDropContent1">Date</div>
                </div>`;
    $('#IncomeExpander').text('Income - $' + totalIncome + '');
    var innerIncomeString = innerIncomeStringHead + innerIncomeRows;
    document.getElementById("HideIncome").innerHTML = innerIncomeString;
    
}
SetupIncomeExpander();

function SetupBudgetExpander() {
    var innerBudgetRows = "";
    budgetList.forEach(function (item) {
        var style = "inherit";
        if (parseFloat(parseFloat(item.amountBudgeted).toFixed(2)) > parseFloat(parseFloat(item.spent).toFixed(2))) {
            style = style;
        }
        else {
            style = "red";
        }
        if (item.type !== "Totals") {
            innerBudgetRows += `
                    <div class="MainDropContent" data-BudgetId="` + item.id + `">
                        <div class="MainDropContent1 ClickableBudget">` + item.type + `</div>
                        <div class="MainDropContent1">$` + item.amountBudgeted + `</div>
                        <div class="MainDropContent1" style="background-color:` + style +`">$` + item.spent + `</div>
                    </div>
                `;
        }
        else {
            innerBudgetRows += `
                    <div class="MainDropContentHeader" data-BudgetId="` + item.id + `">
                        <div class="MainDropContent1">` + item.type + `</div>
                        <div class="MainDropContent1">$` + item.amountBudgeted + `</div>
                        <div class="MainDropContent1">$` + item.spent + `</div>
                    </div>
                `;
        }
    });

    var innerBudgetStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Type</div>
                    <div class="MainDropContent1">Amount Budgeted</div>
                    <div class="MainDropContent1">Amount Spent</div>
                </div>`;
    $('#BudgetExpander').text('Budget - $' + totalBudget + '');
    var innerBudgetString = innerBudgetStringHead + innerBudgetRows;
    document.getElementById("HideBudget").innerHTML = innerBudgetString;    
}
SetupBudgetExpander();

function SetupPurchaseExpander() {
    var innerPurchaseRows = "";
    purchaseList.forEach(function (item) {
        innerPurchaseRows += `
                    <div class="MainDropContent" data-PurchaseId="` + item.id + `">
                        <div class="MainDropContent1 ClickablePurchase">` + item.type + `</div>
                        <div class="MainDropContent1">` + item.description + `</div>
                        <div class="MainDropContent1">$` + item.amount + `</div>
                        <div class="MainDropContent1">` + item.date + `</div>
                    </div>
                `;
    });

    var innerPurchaseStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Type</div>
                    <div class="MainDropContent1">Description</div>
                    <div class="MainDropContent1">Amount</div>
                    <div class="MainDropContent1">Date</div>
                </div>`;
    $('#PurchaseExpander').text('Purchases - $' + totalPurchases + '');
    var innerPurchaseString = innerPurchaseStringHead + innerPurchaseRows;
    document.getElementById("HidePurchase").innerHTML = innerPurchaseString;
}
SetupPurchaseExpander();

function SetupGiftCardPurchaseExpander() {

    var innerPurchaseRows = "";
    giftPurchaseList.forEach(function (item) {
        innerPurchaseRows += `
                    <div class="MainDropContent" data-PurchaseId="` + item.id + `">
                        <div class="MainDropContent1 ClickablePurchase">` + item.type + `</div>
                        <div class="MainDropContent1">` + item.description + `</div>
                        <div class="MainDropContent1">$` + item.amount + `</div>
                        <div class="MainDropContent1">` + item.date + `</div>
                    </div>
                `;
    });

    var innerPurchaseStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Type</div>
                    <div class="MainDropContent1">Description</div>
                    <div class="MainDropContent1">Amount</div>
                    <div class="MainDropContent1">Date</div>
                </div>`;
    $('#GiftCardPurchaseExpander').text('Gift Card - $' + totalGiftCardPurchases + '');
    var innerPurchaseString = innerPurchaseStringHead + innerPurchaseRows;
    document.getElementById("HideGift").innerHTML = innerPurchaseString;
}
SetupGiftCardPurchaseExpander();






////////////////////////////PROGRESS BAR////////////////////////////////////
//Make ProgressBars Dynamic based off of values
function SetupProgressBar(divId, whatToCompare, purchases) {
    var remaining = whatToCompare - purchases;
    var color = successColor;
    var percentage = 0;
    if (whatToCompare > 1) {
        percentage = (purchases / whatToCompare) * 100;
        if (percentage > 75) {
            color = warningColor;
            if (percentage > 95) {
                color = dangerColor;
                if (percentage > 100) {
                    percentage = 100;
                }
            }
        }
    }
    document.getElementById(divId).innerHTML = `
                    <div class="progressbar" title="$` + remaining.toFixed(2) + ` dollars remaining">
                        <div class="insideLeft" title="$` + purchases + ` dollars spent" style="width:` + percentage + `%; background-color:` + color + `; color: ` + color + `"></div>
                        <div class="insideRight"></div>
                    <div>
                `;
}

SetupProgressBar("IncomeVsSpent", totalIncome, totalPurchases);
SetupProgressBar("BudgetVsSpent", totalBudget, totalPurchases);








//OPEN UPDATE FORMS
$(document.body).on('click', '.ClickableIncome', function () {
    var IncomeId = $(this).parent().attr('data-IncomeId');
    createUpdateIncomeForm(IncomeId);
});

$(document.body).on('click', '.ClickableBudget', function () {
    var budgetId = $(this).parent().attr('data-BudgetId');
    createUpdateBudgetForm(budgetId);
});

$(document.body).on('click', '.ClickablePurchase', function () {
    var purchaseId = $(this).parent().attr('data-PurchaseId');
    createUpdatePurchaseForm(purchaseId);
});

$(document.body).on('click', '.ClickableGiftCard', function () {
    var GiftCardId = $(this).attr('data-GiftCardId');
    createUpdateGiftCardForm(GiftCardId);
});

$(document.body).on('click', '.ClickableBudgetType', function () {
    var BudgetTypeId = $(this).parent().attr('data-BudgetTypeId');
    createUpdateBudgetTypeForm(BudgetTypeId);
});

$(document.body).on('click', '.ClickableJob', function () {
    var JobId = $(this).parent().attr('data-JobId');
    createUpdateJobForm(JobId);
});





//API Calls 
$(document.body).on('click', '#scenarioEnter', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var initialBankAmount = $(document.getElementById('initialBankAmount')).val();
        var scenarioInputStartMonth = $(document.getElementById('scenarioInputStartMonth')).val();
        var scenarioInputEndMonth = $(document.getElementById('scenarioInputEndMonth')).val();

        $.post("../api/Budget?scenarioCheck=true",
            {
                initialAmount: initialBankAmount,
                startMonth: scenarioInputStartMonth,
                endMonth: scenarioInputEndMonth
            },
            function (data, status) {
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];

                scenarioInputStartMonth = new Date(scenarioInputStartMonth);
                scenarioInputEndMonth = new Date(scenarioInputEndMonth);
                var startMonth = scenarioInputStartMonth.getMonth() + 1;
                var endMonth = scenarioInputEndMonth.getMonth();
                if (endMonth === 11) {
                    endMonth = 0;
                }
                else {
                    endMonth = endMonth + 1;
                }

                alert("Your estimated Bank Balance at the end from " + monthNames[startMonth] + " to " + monthNames[endMonth] + " is " + data.toFixed(2));
            });
        return false;
    }
});





//In Form Change Events
//  Hides or shows additional fields for gift cards
$(document.body).on("change", "#PurchasePaymentType", function () {

    if ($(this).val() === "Gift Card") {
        $("#GiftCardSwitch").show();
        //Populate the gift card dropdown
        GetGiftCardLines("#GiftCardId");
    }
    else {
        $("#GiftCardSwitch").hide();
    }
});

$(document.body).on("change", "#UpdatePurchasePaymentType", function () {

    if ($(this).val() === "Gift Card") {
        $("#UpdateGiftCardSwitch").show();
        //Populate the gift card dropdown
        GetGiftCardLines("#PurchaseGiftCardId");
    }
    else {
        $("#UpdateGiftCardSwitch").hide();
    }
});

//  Hides or shows dropdown to select a purchase to reimburse
$(document.body).on("change", "#isReimbursementIncome", function () {
    if ($("#isReimbursementIncome:checked").val() === "on") {
        $("#purchaseForReimbursementHide").show();
        //Populate the gift card dropdown
        GetApplicablePurchases("#purchaseForReimbursementSelect");
    }
    else {
        $("#purchaseForReimbursementHide").hide();
    }
});




//Change Events
//  Main Drop Down to add jobs, budget types, open the scenario checker and view lists
$(document.body).on('change', '#MainDropDown', function () {
    var selectedOption = $(this).val();
    if (selectedOption === DropDownOptions.ScenarioChecker) {
        createScenarioCheckerForm();
    }
    else if (selectedOption === DropDownOptions.AddBudgetType) {
        createAddBudgetTypeForm();
    }
    else if (selectedOption === DropDownOptions.AddJob) {
        createAddJobForm();
    }
    else if (selectedOption === DropDownOptions.ListBudgetTypes) {
        createBudgetTypesList();
    }
    else if (selectedOption === DropDownOptions.ListGiftCards) {
        createGiftCardList();
    }
    else if (selectedOption === DropDownOptions.ListJobs) {
        createJobsList();
    }
});



//Ways to close Form
$('.HidePage').click(CloseHoverForm);
function CloseHoverForm() {
    $('.HidePage').hide();
    document.getElementById('hoverFormDiv').innerHTML = '';
    sessionStorage.setItem("dateSelected", monthDateToUse);
    location.reload();
}
function CloseHoverFormToList(functionToExecute) {
    functionToExecute();
}




//SET Session Date with dropdown
$(document.getElementById("mainInputMonth")).on("change", function () {
    monthDateToUse = $("#mainInputMonth").val();
    sessionStorage.setItem("dateSelected", monthDateToUse);
    location.reload();
});



$(document.body).on('hover', '.HoverHistory', function () {
    $('#hoverInfoDiv').html = '<h1>Hello There</h1>';
});