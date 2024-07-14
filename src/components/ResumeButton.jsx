import Swal from 'sweetalert2';

const ResumeButton = () => {
    const openPopUp = () => {
        Swal.fire({
            color: "#000000",
            title: "Thanks for the interest!",
            text: "Which version you would like to download?",
            showCloseButton: true,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Developer",
            confirmButtonColor: "#89BFFF",
            denyButtonText: "Designer",
            denyButtonColor: "#E09CF7",
            cancelButtonText: "Assistant",
            cancelButtonColor: "#BDF4A4",
            customClass: {
                popup: 'swal-popup',
                confirmButton: 'swal-popup',
                cancelButton: 'swal-popup',
                denyButton: 'swal-popup'
            },
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("./Sarmiento-Dev-CV2024.pdf");
            } else if (result.isDenied) {
                window.open("./Sarmiento-Des-CV2024.pdf");
            } else if (result.isDismissed) {
                if (result.dismiss === Swal.DismissReason.cancel) {
                    window.open("./Sarmiento-VA-CV2024.pdf");
                }
            }
        });
    }

    return (
        <div class="download-resume" data-aos="zoom-in" onClick={openPopUp}>
            <div class="download-resume-inner">Download resume</div>
        </div>
    );
}

export default ResumeButton;