// export const containerStyle = {
//     my: { xs: "1rem", sm: "1.5rem" },
//     minHeight: { xs: "calc(100vh - 2rem)", sm: "calc(100vh - 3rem)" },
//     display: "flex",
//     justifyContent: "center",
// };

// export const todoBoxStyle = {
//     maxWidth: 800,
//     width: "100%",
//     mt: 3,
// };

// export const textFieldStyle = {
//     '& fieldset': {
//         borderColor: "rgba(255, 255, 255, 0.125)"
//     }
// };

// export const taskBoxStyle = {
//     p: { xs: 1.6, sm: 2.5 },
//     bgcolor: "transparent",
//     backgroundImage: "none",
//     borderRadius: "12px",
//     border: "1px solid rgba(255, 255, 255, 0.125)",
// };

// export const taskItemStyle = {
//     bgcolor: "#03132b",
//     borderRadius: "8px",
//     p: 2,
//     overflow: "hidden"
// };

// export const checkedItemStyle = {
//     ...taskItemStyle,
//     opacity: 0.5
// };




export const containerStyle = {
    my: { xs: "1rem", sm: "1.5rem" },
    minHeight: { xs: "calc(100vh - 2rem)", sm: "calc(100vh - 3rem)" },
    display: "flex",
    justifyContent: "center",
    bgcolor: "#e0f7fa", // Light Blue background for the container
};

export const todoBoxStyle = {
    maxWidth: 800,
    width: "100%",
    mt: 3,
    bgcolor: "#ffffff", // White background for the todo box
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
};

export const textFieldStyle = {
    '& fieldset': {
        borderColor: "rgba(77, 181, 255, 0.3)" // Light Blue border
    },
    '&:hover fieldset': {
        borderColor: "#4db5ff", // Light Blue border on hover
    }
};

export const taskBoxStyle = {
    p: { xs: 1.6, sm: 2.5 },
    bgcolor: "#ffffff", // White background for the task box
    borderRadius: "12px",
    border: "1px solid rgba(77, 181, 255, 0.3)", // Light Blue border
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
};

export const taskItemStyle = {
    bgcolor: "#e3f2fd", // Light Blue for task items
    borderRadius: "8px",
    p: 2,
    overflow: "hidden",
    '&:hover': {
        bgcolor: "#bbdefb", // Slightly darker on hover
    }
};

export const checkedItemStyle = {
    ...taskItemStyle,
    opacity: 0.5,
};
