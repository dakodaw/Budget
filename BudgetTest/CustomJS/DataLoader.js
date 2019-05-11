var totalIncome = 0;
var totalPurchases = 0;
var totalBudget = 0;
var totalGiftCardPurchases = 0;
var totalGiftBalance = 0;

var incomeList = [];
var budgetList = [];
var purchaseList = [];
var giftPurchaseList = [];
var giftCardList = [];
var jobsList = [];
var budgetTypesList = [];

//  INCOME
function loadIncomeData() {
    totalIncome = 0;
    incomeList = [];
    $.ajax({
        type: "GET",
        url: "../api/Income?getIncomeLines=true&monthYear=" + monthDateToUse + "",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var incomeInput = { id: value.IncomeId, source: value.IncomeSource.IncomeSource, amount: value.Amount.toFixed(2), date: getFormattedDate(value.IncomeDate) };
                incomeList.push(incomeInput);
                totalIncome += value.Amount;
            });
            totalIncome = totalIncome.toFixed(2);
        },
        async: false
    });
}
loadIncomeData();


//  BUDGET
function loadBudgetData() {
    $.ajax({
        type: "GET",
        url: "../api/Budget?getBudgetLines=true&monthYear=" + monthDateToUse + "",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var budgetInput = { id: value.BudgetLineId, type: value.BudgetType.BudgetTypeName, amountBudgeted: value.Amount.toFixed(2), spent: value.PurchaseAmount.toFixed(2) };
                budgetList.push(budgetInput);
                if (value.BudgetType.BudgetTypeName !== "Totals") {
                    totalBudget += value.Amount;
                }
                else {
                    totalPurchases += value.PurchaseAmount;
                }
            });
            totalBudget = totalBudget.toFixed(2);
            totalPurchases = totalPurchases.toFixed(2);
        },
        async: false
    });
}
loadBudgetData();


//  PURCHASES
function loadPurchaseData() {
    $.ajax({
        type: "GET",
        url: "../api/Purchases?getPurchaseLines=true&monthYear=" + monthDateToUse + "",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var purchaseInput = { id: value.Id, type: value.PurchaseType.BudgetTypeName, description: ((value.Description === null) ? "" : value.Description), amount: value.Amount.toFixed(2), date: getFormattedDate(value.Date) };
                purchaseList.push(purchaseInput);
                console.log(value.IsReimbursement);
            });
        },
        async: false
    });
}
loadPurchaseData();


//  GIFT CARD PURCHASES
function loadGiftCardPurchaseData() {
    $.ajax({
        type: "GET",
        url: "../api/GiftCard?getPurchaseLines=true&monthYear=" + monthDateToUse + "",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var purchaseInput = { id: value.Id, type: value.PurchaseType.BudgetTypeName, description: value.Description, amount: value.Amount.toFixed(2), date: getFormattedDate(value.Date) };
                giftPurchaseList.push(purchaseInput);
                totalGiftCardPurchases += value.Amount;
            });
            totalGiftCardPurchases = totalGiftCardPurchases.toFixed(2);
        },
        async: false
    });
}
loadGiftCardPurchaseData();

function loadGiftCardsData() {
    giftCardList = [];
    totalGiftBalance = 0;
    $.ajax({
        type: "GET",
        url: "../api/GiftCard?getGiftCardLines=true",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var firstRemaining = value.RemainingAmount;
                var giftCardInput = { id: value.Id, source: value.Place, amount: firstRemaining.toFixed(2), last4: value.Last4ofCardNumber };
                giftCardList.push(giftCardInput);
                totalGiftBalance += firstRemaining;
            });
            totalGiftBalance = totalGiftBalance.toFixed(2);
        },
        async: false
    });
}

function loadJobsData() {
    jobsList = [];
    $.ajax({
        type: "GET",
        url: "../api/Income?GetFullIncomeSources=true",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var jobInput = { id: value.IncomeSourceId, SourceName: value.IncomeSource, JobOf: value.JobOf, PositionName: value.Position, ActiveJob: value.IsCurrentJob, EstimatedIncome: value.EstimatedIncome };
                jobsList.push(jobInput);
            });
        },
        async: false
    });
}

function loadBudgetTypes() {
    budgetTypesList = [];
    $.ajax({
        type: "GET",
        url: "../api/Budget?getBudgetTypes=true",
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                budgetTypesList.push({ id: value.BudgetTypeId, name: value.BudgetTypeName });
            });
        },
        async: false
    });
}


//Load Lists with Headers first
function GetPurchaseTypes(myClass, optionalId = -1) {
    console.log(optionalId);
    $.ajax({
        type: "GET",
        url: "../api/Budget?getBudgetTypes=true",
        dataType: "json",
        success: function (data) {
            var departments = [];
            $.each(data, function (index, value) {
                if (optionalId === -1) {
                    departments.push('<option value="' + value.BudgetTypeId + '">' + value.BudgetTypeName + '</option>');
                } else {
                    console.log(optionalId);
                    if (optionalId === value.BudgetTypeId) {
                        departments.push('<option value="' + value.BudgetTypeId + '" selected>' + value.BudgetTypeName + '</option>');
                    }
                    else {
                        departments.push('<option value="' + value.BudgetTypeId + '">' + value.BudgetTypeName + '</option>');
                    }
                }
            });
            $(myClass).html('<option value="" selected="selected" disabled="disabled" >-Select Type-</option>' + departments.join(""));
            $(myClass).chosen();
        }
    });
}

function GetApplicablePurchases(myClass, optionalId = -1) {
    $.ajax({
        type: "GET",
        url: "../api/Income?getApplicablePurchases=true&monthYear=" + monthDateToUse + "",
        dataType: "json",
        success: function (data) {
            var departments = [];
            if (optionalId === -1) {
                $.each(data, function (index, value) {
                    departments.push('<option value="' + value.Id + '">' + value.PurchaseType + ' - ' + value.Amount + '</option>');
                });
                $(myClass).html('<option value="" selected="selected" disabled="disabled" >-Select Purchase-</option>' + departments.join(""));
                $(myClass).chosen();
            }
            else {
                $.each(data, function (index, value) {
                    if (value.Id === optionalId) {
                        departments.push('<option selected value="' + value.Id + '">' + value.PurchaseType + ' - ' + value.Amount + '</option>');
                    }
                    else {
                        departments.push('<option value="' + value.Id + '">' + value.PurchaseType + ' - ' + value.Amount + '</option>');
                    }
                });
                $(myClass).html('<option value="" selected="selected" disabled="disabled" >-Select Purchase-</option>' + departments.join(""));
                $(myClass).chosen();
            }
        }
    });
}

function GetIncomeSources(myClass, optionalId = -1) {
    $.ajax({
        type: "GET",
        url: "../api/Income?getIncomeSources=true",
        dataType: "json",
        success: function (data) {
            var departments = [];
            if (optionalId === -1) {
                $.each(data, function (index, value) {
                    departments.push('<option value="' + value.IncomeSourceId + '">' + value.IncomeSource + '</option>');
                });
                $(myClass).html('<option value="" selected="selected" disabled="disabled" >-Select Source-</option>' + departments.join(""));
                $(myClass).chosen();
            }
            else {
                $.each(data, function (index, value) {
                    if (value.IncomeSourceId === optionalId) {
                        departments.push('<option selected value="' + value.IncomeSourceId + '">' + value.IncomeSource + '</option>');
                    }
                    else {
                        departments.push('<option value="' + value.IncomeSourceId + '">' + value.IncomeSource + '</option>');
                    }
                });
                $(myClass).html('<option value="" selected="selected" disabled="disabled" >-Select Source-</option>' + departments.join(""));
                $(myClass).chosen();
            }
        }
    });
}

//Load Lists with Headers first
function GetGiftCardLines(myClass, optionalId = -1) {
    if (optionalId === -1) {
        $.ajax({
            type: "GET",
            url: "../api/GiftCard?getGiftCardLines=true",
            dataType: "json",
            success: function (data) {
                var departments = [];
                $.each(data, function (index, value) {
                    departments.push('<option value="' + value.Id + '">' + value.Place + '(' + value.Last4ofCardNumber + ') - ' + value.RemainingAmount + '</option>');
                });
                $(myClass).html('<option value="" selected="selected" disabled="disabled" >Select a Gift Card</option>' + departments.join(""));
                $(myClass).chosen();
        }
        });
    }
    else {
        $.ajax({
            type: "GET",
            url: "../api/GiftCard?getGiftCardLinesIncludingZeros=true",
            dataType: "json",
            success: function (data) {
                var departments = [];
                $.each(data, function (index, value) {
                    if (value.Id === optionalId) {
                        departments.push('<option selected value="' + value.Id + '">' + value.Place + '(' + value.Last4ofCardNumber + ') - ' + value.RemainingAmount + '</option>');
                    }
                    else {
                        departments.push('<option value="' + value.Id + '">' + value.Place + '(' + value.Last4ofCardNumber + ') - ' + value.RemainingAmount + '</option>');
                    }
                });
                $(myClass).html(departments.join(""));
                $(myClass).chosen();
            }
        });
    }
    
}