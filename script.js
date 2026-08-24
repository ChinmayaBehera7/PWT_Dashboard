const pwtData = [
    {
        period: "Last 2 Months",

        newStyles: 27,
        assigned: 74,
        submitted: 36,

        approved: null,
        forceApproved: null,
        rejected: null,
        forceRejected: null,

        activeUsers: 91
    },

    {
        period: "Last 4 Months",

        newStyles: 58,
        assigned: 156,
        submitted: 154,

        approved: 55,
        forceApproved: 55,
        rejected: 14,
        forceRejected: 14,

        activeUsers: 126
    },

    {
        period: "Last 6 Months",

        newStyles: 127,
        assigned: 296,
        submitted: 277,

        approved: 184,
        forceApproved: 178,
        rejected: 42,
        forceRejected: 41,

        activeUsers: 149
    },

    {
        period: "Last 12 Months",

        newStyles: 288,
        assigned: 470,
        submitted: 467,

        approved: 373,
        forceApproved: 359,
        rejected: 112,
        forceRejected: 106,

        activeUsers: 186
    }
];


// =========================
// Elements
// =========================

const periodFilter = document.getElementById("periodFilter");

const selectedPeriod = document.getElementById("selectedPeriod");
const processPeriod = document.getElementById("processPeriod");
const userPeriod = document.getElementById("userPeriod");

const newStyles = document.getElementById("newStyles");
const assigned = document.getElementById("assigned");
const submitted = document.getElementById("submitted");

const statusAssigned = document.getElementById("statusAssigned");
const statusSubmitted = document.getElementById("statusSubmitted");
const statusApproved = document.getElementById("statusApproved");
const statusForceApproved = document.getElementById("statusForceApproved");
const statusRejected = document.getElementById("statusRejected");
const statusForceRejected = document.getElementById("statusForceRejected");

const activeUsers = document.getElementById("activeUsers");


// =========================
// Format Value
// =========================

function formatValue(value) {
    return value === null ? "—" : value.toLocaleString();
}


// =========================
// Update Dashboard
// =========================

function updateDashboard(index) {

    const data = pwtData[index];

    // Period labels
    selectedPeriod.textContent = data.period;
    processPeriod.textContent = data.period;
    userPeriod.textContent = data.period;


    // Style overview
    newStyles.textContent = formatValue(data.newStyles);
    assigned.textContent = formatValue(data.assigned);
    submitted.textContent = formatValue(data.submitted);


    // Process status
    statusAssigned.textContent =
        formatValue(data.assigned);

    statusSubmitted.textContent =
        formatValue(data.submitted);

    statusApproved.textContent =
        formatValue(data.approved);

    statusForceApproved.textContent =
        formatValue(data.forceApproved);

    statusRejected.textContent =
        formatValue(data.rejected);

    statusForceRejected.textContent =
        formatValue(data.forceRejected);


    // Active users
    activeUsers.textContent =
        formatValue(data.activeUsers);
}


// =========================
// Filter Change
// =========================

periodFilter.addEventListener("change", function () {

    const selectedIndex = Number(this.value);

    updateDashboard(selectedIndex);

});


// =========================
// Initial Dashboard
// =========================

updateDashboard(0);