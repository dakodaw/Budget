//Add Functions
$(document.body).on('click', '#SubmitIncome', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var IncomeSourceId = $(document.getElementById('incomeSourceSelect')).val();
        var IncomeSourceDetails = $(document.getElementById('incomeSourceDetails')).val();
        var Amount = $(document.getElementById('incomeAmount')).val();
        var Date = $(document.getElementById('incomeDate')).val();
        var IsCashIncome = $(document.getElementById('isCashIncome')).val();
        var IsReimbursementIncome = $(document.getElementById('isReimbursementIncome')).val();
        var PurchaseForReimbursement = $(document.getElementById('purchaseForReimbursementSelect')).val();

        $.post("../api/Income?AddUpdateIncome=true",
            {
                SourceId: IncomeSourceId,
                SourceDetails: IncomeSourceDetails,
                Amount: Amount,
                Date: Date,
                IsReimbursement: IsReimbursementIncome,
                PurchaseId: PurchaseForReimbursement,
                IsCash: IsCashIncome
            },
            function (data, status) {
                if (data === true) {
                    alert("Income successfully added");
                    CloseHoverForm();
                }
                else {
                    alert("Failed to add income");
                }
            });
        return false;
    }
});

$(document.body).on('click', '#SubmitBudget', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var PurchaseTypeId = $(document.getElementById('budgetTypeSelect')).val();
        var Date = $(document.getElementById('budgetDate')).val();
        var Amount = $(document.getElementById('budgetAmount')).val();

        $.post("../api/Budget?AddUpdateBudget=true",
            {
                BudgetTypeId: PurchaseTypeId,
                Date: Date,
                Amount: Amount
            },
            function (data, status) {
                if (data === true) {
                    alert("Budget successfully added");
                    CloseHoverForm();
                }
                else {
                    alert("Failed to add budget");
                }
            });
        return false;
    }
});

$(document.body).on('click', '#SubmitPurchase', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var PurchaseTypeId = $(document.getElementById('PurchaseTypeDropDown')).val();
        var Description = $(document.getElementById('PurchaseDescription')).val();
        var Amount = $(document.getElementById('PurchaseAmount')).val();
        var PurchasePaymentType = $(document.getElementById("PurchasePaymentType")).val();
        var Date = $(document.getElementById('PurchaseDate')).val();
        var GiftCardId = $(document.getElementById('GiftCardId')).val();
        var FutureReimbursement = $(document.getElementById('initialAmount')).val();

        $.post("../api/Purchases?AddUpdatePurchase=true",
            {
                PurchaseTypeId: PurchaseTypeId,
                Description: Description,
                Amount: Amount,
                PaymentType: PurchasePaymentType,
                GiftCardId: GiftCardId,
                Date: Date,
                FutureReimbursement: FutureReimbursement
            },
            function (data, status) {
                if (data === true) {
                    alert("Purchase successfully added");
                    CloseHoverForm();
                }
                else {
                    alert("Failed to add purchase");
                }
            });

        return false;
    }
});

$(document.body).on('click', '#SubmitGiftCard', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var Place = $(document.getElementById('giftCardPlace')).val();
        var CardNo = $(document.getElementById('giftCardNumber')).val();
        var AccessCode = $(document.getElementById('accessCode')).val();
        var InitialAmount = $(document.getElementById('initialAmount')).val();

        $.post("../api/GiftCard?AddUpdateGiftCard=true",
            {
                Place: Place,
                CardNumber: CardNo,
                AccessCode: AccessCode,
                InitialAmount: InitialAmount
            },
            function (data, status) {
                if (data === true) {
                    alert("Gift Card successfully added");
                    CloseHoverForm();
                }
                else {
                    alert("Failed to add gift card");
                }
            });

        return false;
    }
});

$(document.body).on('click', '#SubmitBudgetType', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var BudgetTypeName = $(document.getElementById('budgetTypeNameInput')).val();
        console.log(BudgetTypeName);
        $.post("../api/Budget?AddUpdateBudgetType=true",
            {
                budgetType1: BudgetTypeName
            },
            function (data, status) {
                if (data === true) {
                    alert("Budget type successfully added");
                    CloseHoverForm();
                }
                else {
                    alert("Failed to add budget type");
                }
            });
        return false;
    }
});

$(document.body).on('click', '#SubmitJob', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var ActiveJob = true;
        var SourceName = $(document.getElementById('incomeSourceName')).val();
        var JobOf = $(document.getElementById('employeeName')).val();
        var PositionName = $(document.getElementById('position')).val();
        var EstimatedIncome = $(document.getElementById('estimatedIncomeAmount')).val();
        var PayFrequency = $(document.getElementById('paymentFrequency')).val();

        $.post("../api/Income?AddUpdateJob=true",
            {
                SourceName: SourceName,
                JobOf: JobOf,
                PositionName: PositionName,
                ActiveJob: ActiveJob,
                EstimatedIncome: EstimatedIncome,
                PayFrequency: PayFrequency
            },
            function (data, status) {
                if (data === true) {
                    alert("Job successfully added");
                    CloseHoverForm();
                }
                else {
                    alert("Failed to add job");
                }
            });
        return false;
    }
});



//UPDATE FUNCTIONS
$(document.body).on('click touchstart', '#UpdateIncome', function () {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var IncomeId = $(this).attr('data-UpdateIncomeId');
        var SourceId = $(document.getElementById('incomeSourceSelect')).val();
        var SourceDetails = $(document.getElementById('incomeSourceDetails')).val();
        var Amount = $(document.getElementById('incomeAmount')).val();
        var Date = $(document.getElementById('incomeDate')).val();
        var IsReimbursement = $(document.getElementById("isReimbursementIncome")).val();
        var PurchaseId = $(document.getElementById('purchaseForReimbursementSelect')).val();
        var IsCash = $(document.getElementById('isCashIncome')).val();
        $.post("../api/Income?AddUpdateIncome=true&incomeId=" + IncomeId + "",
            {
                SourceId: SourceId,
                SourceDetails: SourceDetails,
                Amount: Amount,
                Date: Date,
                IsReimbursement: IsReimbursement,
                PurchaseId: PurchaseId,
                IsCash: IsCash
            },
            function (data, status) {
                alert("Budget entry successfully updated");
                CloseHoverForm();
            });
        return false;
    }
});

$(document.body).on('click touchstart', '#UpdateBudget', function (e) {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var budgetId = $(this).attr("data-UpdateId");
        var PurchaseTypeId = $(document.getElementById('budgetUpdateTypeSelect')).val();
        var Date = $(document.getElementById('budgetDate')).val();
        var Amount = $(document.getElementById('budgetAmount')).val();
        $.post("../api/Budget?AddUpdateBudget=true&budgetId=" + budgetId + "",
            {
                BudgetTypeId: PurchaseTypeId,
                Date: Date,
                Amount: Amount
            },
            function (data, status) {
                alert("Budget entry successfully updated");
                CloseHoverForm();
            });
        return false;
    }
});

$(document.body).on('click touchstart', '#UpdatePurchase', function () {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var PurchaseId = $(this).attr('data-UpdatePurchaseId');
        var PurchaseTypeId = $(document.getElementById('PurchaseUpdateTypeDropDown')).val();
        var Description = $(document.getElementById('PurchaseDescription')).val();
        var Amount = $(document.getElementById('PurchaseAmount')).val();
        var PurchasePaymentType = $(document.getElementById("UpdatePurchasePaymentType")).val();
        var Date = $(document.getElementById('PurchaseDate')).val();
        var GiftCardId = $(document.getElementById('PurchaseGiftCardId')).val();
        var FutureReimbursement = $(document.getElementById('initialAmount')).val();
        $.post("../api/Purchases?AddUpdatePurchase=true&purchaseId=" + PurchaseId + "",
            {
                PurchaseTypeId: PurchaseTypeId,
                Description: Description,
                Amount: Amount,
                PaymentType: PurchasePaymentType,
                GiftCardId: GiftCardId,
                Date: Date,
                FutureReimbursement: FutureReimbursement
            },
            function (data, status) {
                alert("Budget entry successfully updated");
                CloseHoverForm();
            });
        return false;
    }
});

$(document.body).on('click touchstart', '#UpdateGiftCard', function () {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var GiftCardId = $(this).attr('data-GiftCardId');
        var Place = $(document.getElementById('giftCardPlace')).val();
        var CardNo = $(document.getElementById('giftCardNumber')).val();
        var AccessCode = $(document.getElementById('accessCode')).val();
        var InitialAmount = $(document.getElementById('initialAmount')).val();
        $.post("../api/GiftCard?AddUpdateGiftCard=true&giftCardId=" + GiftCardId + "",
            {
                Place: Place,
                CardNumber: CardNo,
                AccessCode: AccessCode,
                InitialAmount: InitialAmount
            },
            function (data, status) {
                if (data === true) {
                    alert("Gift Card entry successfully updated");
                    CloseHoverFormToList(createGiftCardList);
                }
                else {
                    alert("Failed to update gift card");
                }
            });
        return false;
    }
});

$(document.body).on('click touchstart', '#UpdateJob', function () {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var IncomeSourceId = $(this).attr('data-IncomeSourceId');
        var ActiveJobCheck = $(document.getElementById('isCurrentJobCheck')).val();
        console.log(ActiveJobCheck);
        var ActiveJob = true;
        var SourceName = $(document.getElementById('incomeSourceName')).val();
        var JobOf = $(document.getElementById('employeeName')).val();
        var PositionName = $(document.getElementById('position')).val();
        var EstimatedIncome = $(document.getElementById('estimatedIncomeAmount')).val();
        var PayFrequency = $(document.getElementById('paymentFrequency')).val();
        $.post("../api//Income?AddUpdateJob=true&incomeSourceId=" + IncomeSourceId + "",
            {
                SourceName: SourceName,
                JobOf: JobOf,
                PositionName: PositionName,
                ActiveJob: ActiveJob,
                EstimatedIncome: EstimatedIncome,
                PayFrequency: PayFrequency
            },
            function (data, status) {
                if (data === true) {
                    alert("Job entry successfully updated");
                    CloseHoverFormToList(createJobsList);
                }
                else {
                    alert("Job failed to update");
                }
            });
        return false;
    }
});

$(document.body).on('click touchstart', '#UpdateBudgetType', function () {
    //e.preventDefault();
    if (!$("form").valid()) return;
    else {
        var BudgetTypeId = $(this).attr('data-BudgetTypeId');
        var BudgetTypeName = $(document.getElementById('budgetTypeNameInput')).val();
        $.post("../api/Budget?AddUpdateBudgetType=true&budgetTypeId=" + BudgetTypeId + "",
            {
                budgetType1 : BudgetTypeName
            },
            function (data, status) {
                if (data === true) {
                    alert("Budget type entry successfully updated");
                    CloseHoverFormToList(createBudgetTypesList);
                }
                else {
                    alert("Budget type failed to update");
                }
            });
        return false;
    }
});




//DELETE FUNCTIONS
function DeleteIncomeEntry(incomeId) {
    $.ajax({
        type: "GET",
        url: "../api/Income?deleteIncomeEntry=true&incomeId=" + incomeId + "",
        dataType: "json",
        success: function (data) {
            alert("Income entry " + incomeId + " has been deleted");
            CloseHoverForm();
        }
    });
}

function DeleteBudgetEntry(budgetId) {
    $.ajax({
        type: "GET",
        url: "../api/Budget?deleteBudgetEntry=true&budgetId=" + budgetId + "",
        dataType: "json",
        success: function (data) {
            alert("Budget entry " + budgetId + " has been deleted");
            CloseHoverForm();
        }
    });
}

function DeletePurchaseEntry(purchaseId) {
    $.ajax({
        type: "GET",
        url: "../api/Purchases?deletePurchaseEntry=true&purchaseId=" + purchaseId + "",
        dataType: "json",
        success: function (data) {
            if (data === true) {
                alert("Purchase entry " + purchaseId + " has been deleted");
                CloseHoverForm();
            }
            else {
                alert("Purchase failed to be deleted");
            }

        }
    });
}

function DeleteGiftCardEntry(giftCardId) {
    $.ajax({
        type: "GET",
        url: "../api/GiftCard?deleteGiftCardEntry=true&giftCardId=" + giftCardId + "",
        dataType: "json",
        success: function (data) {
            if (data === true) {
                alert("Gift Card entry " + giftCardId + " has been deleted");
                CloseHoverFormToList(createGiftCardList);
            }
            else {
                alert("Gift Card was not deleted");
            }
        }
    });
}

function DeleteJobEntry(incomeSourceId) {
    $.ajax({
        type: "GET",
        url: "../api/Income?deleteJobEntry=true&incomeSourceId=" + incomeSourceId + "",
        dataType: "json",
        success: function (data) {
            if (data === true) {
                alert("Income Source " + incomeSourceId + " has been deleted");
                CloseHoverFormToList(createJobsList);
            }
            else {
                alert("Income Source failed to delete");
            }
        }
    });
}

function DeleteBudgetTypeEntry(budgetTypeId) {
    $.ajax({
        type: "GET",
        url: "../api/Budget?deleteBudgetTypeEntry=true&budgetTypeId=" + budgetTypeId + "",
        dataType: "json",
        success: function (data) {
            if (data === true) {
                alert("Budget Type entry" + budgetTypeId + " has been deleted");
                CloseHoverFormToList(createBudgetTypesList);
            }
            else {
                alert("Budget Type failed to delete");
            }
        }
    });
}




