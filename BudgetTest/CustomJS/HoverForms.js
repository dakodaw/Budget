//Add Forms
function createAddIncomeForm() {
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Add Income</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Source</label>
                                    <select id='incomeSourceSelect' class='maindropdown typesDropDown form-control' required></select>
                                </div>
                                <div id="incomeDetailsHide" class="formSpacing">
                                    <label class="formLabel">Source Details</label>
                                    <input id="incomeSourceDetails" placeholder="Optional Details" class="form-control" type="text">
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Amount</label>
                                    <input id='incomeAmount' type='text' class="form-control" placeholder="Income Amount" required />
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Date</label>
                                    <input id='incomeDate' type='date' class="form-control" required value="` + dateToUseInForm + `" />
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Is Cash?</label>
                                    <input id="isCashIncome" class="form-control input-md" type="checkbox">
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Is Reimbursement?</label>
                                    <input id="isReimbursementIncome" class="form-control input-md" type="checkbox">
                                </div>
                                <div id="purchaseForReimbursementHide" class="formSpacing">
                                    <label class="formLabel">Purchase</label>
                                    <select id='purchaseForReimbursementSelect' class='maindropdown typesDropDown form-control'></select>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="SubmitIncome" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
    GetIncomeSources("#incomeSourceSelect");
    $("#purchaseForReimbursementHide").hide();
}

function createAddBudgetForm() {
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Add Budget</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Budget Type</label>
                                    <select id='budgetTypeSelect' class='maindropdown typesDropDown form-control' required></select>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Date</label>
                                    <input id="budgetDate" class="form-control" type="month" value="` + monthDateToUse + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Amount</label>
                                    <input id='budgetAmount' type='text' class="form-control" placeholder="Amount" required />
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="SubmitBudget" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
    GetPurchaseTypes("#budgetTypeSelect");
}

function createAddPurchaseForm() {
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Add Purchase</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Purchase Type</label>
                                    <select id='PurchaseTypeDropDown' class='maindropdown typesDropDown form-control' required></select>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Description</label>
                                    <input id="PurchaseDescription" placeholder="Description" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Amount</label>
                                    <input id='PurchaseAmount' type='text' class="form-control" placeholder="Amount" required />
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Date</label>
                                    <input id="PurchaseDate" class="form-control input-md" type="date" value="` + dateToUseInForm + `" required>
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Payment Type</label>
                                    <select id="PurchasePaymentType" class="maindropdown typesDropDown form-control">
                                        <option value="Normal" selected >Normal</option>
                                        <option value="Cash" >Cash</option>
                                        <option value="Gift Card" >Gift Card</option>
                                    </select>
                                </div>   
                                <div class="formSpacing" id="GiftCardSwitch">
                                    <label class="formLabel">Gift Card</label>
            <!--Put in select with Gift Cards to choose from-->
                                    <select id="GiftCardId" class="form-control input-md"></select>
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Will Be Reimbursed?</label>
                                    <input id="GiftCardId" placeholder="Initial Amount" class="form-control input-md" type="checkbox">
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="SubmitPurchase" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
    GetPurchaseTypes("#PurchaseTypeDropDown");
    $("#PurchasePaymentType").chosen();
    $("#GiftCardSwitch").hide();
}

function createAddGiftCardForm(){
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Add Gift Card</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Place</label>
                                    <input id="giftCardPlace" placeholder="Place" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Card #</label>
                                    <input id="giftCardNumber" placeholder="Card Number" class="form-control" type="text">
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Access Code</label>
                                    <input id='accessCode' type='text' class="form-control" placeholder="Access Code" />
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Initial Amount</label>
                                    <input id="initialAmount" placeholder="Initial Amount" class="form-control input-md" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="SubmitGiftCard" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
}

function createAddBudgetTypeForm(){
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Add Budget Option</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Budget Type</label><br/>
                                    <input id="budgetTypeNameInput" placeholder="Budget Type" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="SubmitBudgetType" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
}

function createAddJobForm() {
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Add Job</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Income Source Name</label><br/>
                                    <input id="incomeSourceName" placeholder="Company Name" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Whos Job Is This?</label><br/>
                                    <input id="employeeName" placeholder="Employee Name" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Position Name</label><br/>
                                    <input id="position" placeholder="Position" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Estimated Income</label><br/>
                                    <input id="estimatedIncomeAmount" placeholder="Income Amount" class="form-control" type="number" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Income Frequency</label><br/>
                                    <select id="paymentFrequency">
                                        <option value="Biweekly">Biweekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="TwiceAMonth">Twice A Month</option>
                                    </select>
                                </div>
                                
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="SubmitJob" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
}


//Lists and Scenario Checker
function createScenarioCheckerForm(){
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Scenario Checker</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Initial Bank Amount</label><br/>
                                    <input id="initialBankAmount" placeholder="Initial Amount" class="form-control" type="text" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Start Month</label><br/>
                                    <input id="scenarioInputStartMonth" type="month" class="form-control" required />
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">End Month</label><br/>
                                    <input id="scenarioInputEndMonth" type="month" class="form-control" required />
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="scenarioEnter" class="AddButton" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;

}

function createBudgetTypesList() {
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Budget Types</h2></div>
                        <div class="leftForm">
                            <div class="">
                                <div id="ShowBudgetTypes" class="MainContent"></div>
                                <div class="formSpacing">
                                    <br/>
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Close</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
    SetupBudgetTypesList();
}

function createGiftCardList() {
    totalGiftBalance = 0;
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="GiftCardListHeader"></div>
                        <div class="leftForm">
                            <div class="">
                                <div id="ShowGiftCards" class="MainContent"></div>
                                <div class="formSpacing">
                                    <br/>
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Close</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
    SetupGiftCardList();
    document.getElementById('GiftCardListHeader').innerHTML = '<h2>Gift Cards - ' + totalGiftBalance + '</h2>';

}

function createJobsList(){
    $('.HidePage').show();
    document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Jobs</h2></div>
                        <div class="leftForm">
                            <div class="">
                                <div id="ShowJobs" class="MainContent"></div>
                                <div class="formSpacing">
                                    <br/>
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Close</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
    SetupJobList();
}

//Update Forms
function createUpdateIncomeForm(IncomeId) {
    $('.HidePage').show();
    $.ajax({
        type: "GET",
        url: "../api/Income?GetExistingIncome=true&incomeId=" + IncomeId + "",
        dataType: "json",
        success: function (data) {
            var Amount = data.Amount;
            var Description = data.Details;
            var IncomeDate = new Date(data.IncomeDate);
            //Convert Date
            IncomeDate = IncomeDate.getFullYear() + "-" + IncomeDate.getMonthFormatted() + "-" + IncomeDate.getDayFormatted();

            var IncomeSourceId = data.IncomeSourceId;
            //Convert Date
            var IsCash = data.IsCash;
            var IsReimbursement = data.IsReimbursement;
            var PurchaseId = data.PurchaseId;
            document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Update Income</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Source</label>
                                    <select id='incomeSourceSelect' class='maindropdown typesDropDown form-control' required></select>
                                </div>
                                <div id="incomeDetailsHide" class="formSpacing">
                                    <label class="formLabel">Source Details</label>
                                    <input id="incomeSourceDetails" placeholder="Optional Details" class="form-control" type="text" value="` + ((Description === null) ? "" : Description) + `">
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Amount</label>
                                    <input id='incomeAmount' type='text' class="form-control" placeholder="Income Amount" value="` + Amount.toFixed(2) + `" required />
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Date</label>
                                    <input id='incomeDate' type='date' class="form-control" value="` + IncomeDate + `" required />
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Is Cash?</label>
                                    <input id="isCashIncome" class="form-control input-md" type="checkbox" ` + (IsCash ? `checked` : ``) + `>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Is Reimbursement?</label>
                                    <input id="isReimbursementIncome" class="form-control input-md" type="checkbox" ` + (IsReimbursement ? `checked` : ``) + `>
                                </div>
                                <div id="purchaseForReimbursementHide" class="formSpacing">
                                    <label class="formLabel">Purchase</label>
                                    <select id='purchaseForReimbursementSelect' class='maindropdown typesDropDown form-control'></select>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="UpdateIncome" class="AddButton" data-UpdateIncomeId="` + IncomeId + `" type="submit">Update</button>
                                </div>
                                <button id="DeleteIncomeButton" class="CancelButtons" onclick="DeleteIncomeEntry(` + IncomeId + `)" type="button">Delete</button>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
            GetIncomeSources("#incomeSourceSelect", IncomeSourceId);
            if (IsReimbursement) {
                GetApplicablePurchases("#purchaseForReimbursementSelect", PurchaseId);
            } else {
                $("#purchaseForReimbursementHide").hide();
            }
        }
    });
}

function createUpdateBudgetForm(budgetId) {
    $('.HidePage').show();
    $.ajax({
        type: "GET",
        url: "../api/Budget?getExistingBudget=true&budgetId=" + budgetId + "",
        dataType: "json",
        success: function (data) {
            var Amount = data.Amount;
            //Convert Date
            var BudgetDate = data.BudgetMonthYear;
            var BudgetTypeId = data.BudgetType.BudgetTypeId;
            document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Update Budget</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Budget Type</label>
                                    <select id='budgetUpdateTypeSelect' class='maindropdown typesDropDown form-control' required></select>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Date</label>
                                    <input id="budgetDate" class="form-control" type="month" value="` + BudgetDate + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Amount</label>
                                    <input id='budgetAmount' type='text' class="form-control" placeholder="Amount" value="` + Amount + `" required />
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="UpdateBudget" data-UpdateId="` + budgetId + `" class="AddButton" type="submit">Update</button>
                                    <button class="CancelButtons" id="budgetDeleteButton" type="button" onclick="DeleteBudgetEntry(` + budgetId + `)">Delete</button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
            GetPurchaseTypes("#budgetUpdateTypeSelect", BudgetTypeId);
        }
    });
}

function createUpdatePurchaseForm(purchaseId) {
    $('.HidePage').show();
    $.ajax({
        type: "GET",
        url: "../api/Purchases?getExistingPurchase=true&purchaseId=" + purchaseId + "",
        dataType: "json",
        success: function (data) {
            var Amount = data.Amount;
            var Description = data.Description;
            var PaymentType = data.PaymentType;
            var PurchaseDate = new Date(data.Date);
            var GiftCardId = data.GiftCardId;
            //Convert Date
            PurchaseDate = PurchaseDate.getFullYear() + "-" + PurchaseDate.getMonthFormatted() + "-" + PurchaseDate.getDayFormatted();
            var PurchaseTypeId = data.PurchaseType.BudgetTypeId;
            console.log(PurchaseTypeId);
            var FrontFormPiece = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Update Purchase</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Purchase Type</label>
                                    <select id='PurchaseUpdateTypeDropDown' class='maindropdown typesDropDown form-control' required></select>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Description</label>
                                    <input id="PurchaseDescription" placeholder="Description" class="form-control" type="text" required value="` + Description + `">
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Amount</label>
                                    <input id='PurchaseAmount' type='text' class="form-control" placeholder="Amount" required value="` + Amount + `" />
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Date</label>
                                    <input id="PurchaseDate" class="form-control input-md" type="date" value="` + PurchaseDate + `" required>
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Payment Type</label>
                                    <select id="UpdatePurchasePaymentType" class="maindropdown typesDropDown form-control">`;
            var midPiece = "";
            if (PaymentType === "Normal") {
                midPiece = `
                                        <option value="Normal" selected >Normal</option>
                                        <option value="Cash" >Cash</option>
                                        <option value="Gift Card" >Gift Card</option>`;
            }
            else if (PaymentType === "Cash") {
                midPiece = `
                                        <option value="Normal" >Normal</option>
                                        <option value="Cash" selected>Cash</option>
                                        <option value="Gift Card" >Gift Card</option>`;
            }
            else {
                midPiece = `
                                        <option value = "Normal" > Normal</option >
                                        <option value="Cash" >Cash</option>
                                        <option value="Gift Card" selected>Gift Card</option>`;
            }
            var endpiece = `
                                    </select>
                                </div>   
                                <div class="formSpacing" id="UpdateGiftCardSwitch">
                                    <label class="formLabel">Gift Card</label>
            <!--Put in select with Gift Cards to choose from-->
                                    <select id="PurchaseGiftCardId" class="form-control input-md"></select>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverForm()">Cancel</button>
                                    <button id="UpdatePurchase" class="AddButton" data-UpdatePurchaseId="` + purchaseId + `" type="submit">Update</button>
                                </div>
                                    <button id="DeletePurchaseButton" class="CancelButtons" type="button" onclick="DeletePurchaseEntry(` + purchaseId + `)">Delete</button>
                            </div>
                        </div>
                        <br />
                        <br/>

                        <br/>
                        <br/>
                    </form>`;
            document.getElementById('hoverFormDiv').innerHTML = FrontFormPiece + midPiece + endpiece;
            GetPurchaseTypes("#PurchaseUpdateTypeDropDown", PurchaseTypeId);
            $("#UpdatePurchasePaymentType").chosen();
            if (PaymentType === "Gift Card") {
                GetGiftCardLines("#PurchaseGiftCardId", GiftCardId);
            }
            else {
                $("#UpdateGiftCardSwitch").hide();
            }
        }
    });
}

function createUpdateGiftCardForm(giftCardId) {
    $('.HidePage').show();
    $.ajax({
        type: "GET",
        url: "../api/GiftCard?GetGiftCard=true&giftCardId=" + giftCardId + "",
        dataType: "json",
        success: function (data) {
            var Id = data.Id;
            var Place = data.Place;
            var CardNo = data.CardNumber;
            var InitialAmount = data.InitialAmount;
            var AccessCode = data.AccessCode;
            document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Update Gift Card</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Place</label>
                                    <input id="giftCardPlace" placeholder="Place" class="form-control" type="text" value="` + Place + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Card #</label>
                                    <input id="giftCardNumber" placeholder="Card Number" class="form-control" value="` + CardNo + `" type="text">
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Access Code</label>
                                    <input id='accessCode' type='text' class="form-control" placeholder="Access Code" value="` + AccessCode + `" />
                                </div>
                                <div class="formSpacing" id="initial">
                                    <label class="formLabel">Initial Amount</label>
                                    <input id="initialAmount" placeholder="Initial Amount" class="form-control input-md" type="text" value="` + InitialAmount + `" required>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverFormToList(createGiftCardList)">Cancel</button>
                                    <button id="UpdateGiftCard" class="AddButton" type="submit" data-GiftCardId="` + Id + `">Update</button>
                                </div>
                                    <button id="DeletePurchaseButton" class="CancelButtons" type="button" onclick="DeleteGiftCardEntry(` + Id + `)">Delete</button>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
        }
    });
}

function createUpdateBudgetTypeForm(budgetTypeId) {
    $('.HidePage').show();
    $.ajax({
        type: "GET",
        url: "../api/Budget?GetBudgetType=true&budgetTypeId=" + budgetTypeId + "",
        dataType: "json",
        success: function (data) {
            var Id = data.BudgetTypeId;
            var BudgetType = data.BudgetTypeName;
            document.getElementById('hoverFormDiv').innerHTML = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Update Budget Option</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Budget Type</label><br/>
                                    <input id="budgetTypeNameInput" placeholder="Budget Type" class="form-control" type="text" value="` + BudgetType + `" required>
                                </div>
                                    <br/>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverFormToList(createBudgetTypesList)">Cancel</button>
                                    <button id="UpdateBudgetType" class="AddButton" type="submit" data-BudgetTypeId="` + Id + `">Update</button>                                </div>
                                </div>
                                    <button id="DeleteBudgetTypeButton" class="CancelButtons" type="button" onclick="DeleteBudgetTypeEntry(` + Id + `)">Delete</button>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
        }
    });
}

function createUpdateJobForm(incomeSourceId) {
    $('.HidePage').show();
    $.ajax({
        type: "GET",
        url: "../api/Income?GetIncomeSource=true&IncomeSourceId=" + incomeSourceId + "",
        dataType: "json",
        success: function (data) {
            var IncomeSource = data.IncomeSource;
            var IsCurrentJob = data.IsCurrentJob;
            var JobOf = data.JobOf;
            var PayFrequency = data.PayFrequency;
            var Position = data.Position;
            var EstimatedIncome = data.EstimatedIncome;
            document.getElementById('hoverFormDiv').innerHTML = ``;
            var FrontPiece = `
                    <form id="Hover-Form" method="post">
                        <br />
                        <div id="NewAssetHeader"><h2>Update Job</h2></div>
                        <div class="leftForm">
                            <div class="innerForm">
                                <div class="formSpacing">
                                    <label class="formLabel">Income Source Name</label><br/>
                                    <input id="incomeSourceName" placeholder="Company Name" class="form-control" type="text" value="` + IncomeSource + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Whos Job Is This?</label><br/>
                                    <input id="employeeName" placeholder="Employee Name" class="form-control" type="text" value="` + JobOf + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Position Name</label><br/>
                                    <input id="position" placeholder="Position" class="form-control" type="text" value="` + ((Position === null)? "":Position) + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Estimated Income</label><br/>
                                    <input id="estimatedIncomeAmount" placeholder="Income Amount" class="form-control" type="number" value="` + EstimatedIncome + `" required>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Income Frequency</label><br/>
                                    <select id="paymentFrequency">`;
            var MiddlePiece = ``;
            if (PayFrequency === "Biweekly") {
                MiddlePiece = `
                                        <option selected value="Biweekly">Biweekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="TwiceAMonth">Twice A Month</option>`;
            } else if (PayFrequency === "Monthly") {
                MiddlePiece = `
                                        <option value="Biweekly">Biweekly</option>
                                        <option selected value="Monthly">Monthly</option>
                                        <option value="TwiceAMonth">Twice A Month</option>`;
            } else if (PayFrequency === "TwiceAMonth") {
                MiddlePiece = `
                                        <option value="Biweekly">Biweekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option selected value="TwiceAMonth">Twice A Month</option>`;
            } else {
                MiddlePiece = `
                                        <option value="Biweekly">Biweekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="TwiceAMonth">Twice A Month</option>`;
            }
            var EndPiece = `
                                    </select>
                                </div>
                                <div class="formSpacing">
                                    <label class="formLabel">Is Current Job</label><br/>
                                    <input id="isCurrentJobCheck" placeholder="Income Amount" class="form-control" type="checkbox" `+ (IsCurrentJob?"checked":"") +` required>
                                </div>
                                <div class="formSpacing">
                                    <button class="CancelButtons" type="button" onclick="CloseHoverFormToList(createJobsList)">Cancel</button>
                                    <button id="UpdateJob" class="AddButton" data-IncomeSourceId="` + incomeSourceId + `" type="submit">Update</button>
                                </div>
                                    <button id="DeletePurchaseButton" class="CancelButtons" type="button" onclick="DeleteJobEntry(` + incomeSourceId + `)">Delete</button>
                            </div>
                        </div>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                    </form>`;
            document.getElementById('hoverFormDiv').innerHTML = FrontPiece + MiddlePiece + EndPiece;
        }
    });
}


//Events to open forms
//  Set up Add Form for Income
$(document.getElementById("addIncome")).on("click", createAddIncomeForm);

//  Set up Add Form for Purchase
$(document.getElementById("addBudget")).on("click", createAddBudgetForm);

//  Set up Add Form for Purchase
$(document.getElementById("addPurchase")).on("click", createAddPurchaseForm);

//  Set up Add Form for Gift Card
$(document.getElementById("addGiftCard")).on("click", createAddGiftCardForm);




//Setup List Tables
function SetupGiftCardList() {
    loadGiftCardsData();
    var innerGiftCardRows = "";
    giftCardList.forEach(function (item) {
        innerGiftCardRows += `
                    <div class="MainDropContent ClickableGiftCard" data-GiftCardId="` + item.id + `" >
                        <div class="MainDropContent1 ClickableGiftCard">` + item.source + `</div>
                        <div class="MainDropContent1">$` + item.amount + `</div>
                        <div class="MainDropContent1">` + item.last4 + `</div>
                    </div>`;
    });

    var innerGiftCardStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Place</div>
                    <div class="MainDropContent1">Amount</div>
                    <div class="MainDropContent1">Last 4 of Card</div>
                </div>`;
    var innerGiftCardsString = innerGiftCardStringHead + innerGiftCardRows;
    document.getElementById("ShowGiftCards").innerHTML = innerGiftCardsString;

}

function SetupJobList() {
    loadJobsData();
    var innerJobsRows = "";
    jobsList.forEach(function (item) {
        innerJobsRows += `
                    <div class="MainDropContent" data-JobId="` + item.id + `" >
                        <div class="MainDropContent1 ClickableJob">` + item.SourceName + `</div>
                        <div class="MainDropContent1">` + ((item.PositionName == null) ? "" : item.PositionName) + `</div>
                        <div class="MainDropContent1">` + ((item.EstimatedIncome == 0.00) ? "" : ("$" + item.EstimatedIncome.toFixed(2) + "")) + `</div>
                        <div class="MainDropContent1">` + item.JobOf + `</div>
                    </div>
                `;
    });

    var innerJobsStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Place</div>
                    <div class="MainDropContent1">Position Name</div>
                    <div class="MainDropContent1">Estimated Income</div>
                    <div class="MainDropContent1">Whos Job</div>
                </div>`;
    var innerJobsString = innerJobsStringHead + innerJobsRows;
    document.getElementById("ShowJobs").innerHTML = innerJobsString;

}

function SetupBudgetTypesList() {
    loadBudgetTypes();
    var innerJobsRows = "";
    budgetTypesList.forEach(function (item) {
        innerJobsRows += `
                    <div class="MainDropContent" data-BudgetTypeId="` + item.id + `" >
                        <div class="MainDropContent1 ClickableBudgetType">` + item.name + `</div>
                    </div>`;
    });

    var innerJobsStringHead = `
                <br />
                <div class="MainDropContentHeader">
                    <div class="MainDropContent1">Budget Types</div>
                </div>`;
    var innerJobsString = innerJobsStringHead + innerJobsRows;
    document.getElementById("ShowBudgetTypes").innerHTML = innerJobsString;
}

