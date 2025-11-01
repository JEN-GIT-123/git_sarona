export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Logo / Avatar */}
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMBBAUGB//EAD4QAAEDAgMEBgcFBwUAAAAAAAEAAgMEEQUSITEyQXEGE1FSYZEWIlSBkrHSFDNCodEHFSNygsHxJFZzlOH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAMBEBAAICAQIDBQcFAQAAAAAAAAECAxExEiEEE0EiUZGhwQUUUlNx0fAjQmGBsTL/2gAMAwEAAhEDEQA/APiMj3Z3esdp4oI53d4+aBnd3j5oGd3ePmgZ3d4+aBnd3j5oGd3ePmgZ3d4+aBnd3j5oGd3ePmgZ3d4+aBnd3j5oGd3ePmgZ3d4+aBnd3j5oGd3ePmgZ3d4+aBnd3j5oLYnOLdp29qCuTfdzKCCAgICAgICAgICAgICAgICAguh3TzVRCTfdzKioICAgICAgIMoB0QYQEBAQEBAQEF0O6eaqISb7uZUVBAQEBAQZsgy1uqsIsaz1gO0JEEsStyyOCTCRwjl2aIrBbayKioCAgICAguh3TzVRCTfdzKioICAgIMjaEFzo7Zb8Wiy1pjYxhudOB4JEEyvYw5ycoIDLlXSTaGIoZ6+pLKeEvldchjRqbDWw47FOZa7VhW1uVwO3Zs5pCTwzIzRnirpNqJG2KzLcIKKICAgILod081UQk33cyoqCAgIMhBIDUc1dI26hthEQPwhdJc6zygwXd4kW2qLLqzRCGARxtF7bTxPau0xqrw1tN77lqYRWR4ZVsrw57qmB2anY0kDN3iewdnHwXGlopPU9mWlslejiJ/nZ0OkLJZ/sGJ1EYZNXQh0xsBnka7V1hp6wLHcyVu1ZiYmfVmsxqYieNuZI31Yu3X+yzprbUqG2fbwHyWJbhSQstsICAgILod081UQk33cyoqCAgIJMCsJKYHrjmtJPDfq22EH/ABg6LdocaTvaMMbM5klcRHHYkdp7FIjvuS9p1015lCpxDrswDLA6beCWybMeDo5Tgr6Uwtiq8PErmjKJY5TG+3C+0HnZSL11q0Ok0tvdbfV6W8uK9GqTD44XF1JI6SimJuZWEXdCSNA4WBAO22liV3mJtSJj04/nvcYr03nfr/Pg4EguISL2N7HyXNv3tKqH8T+lvyWLN1ns13DS6w3CCiiAgILod081UQk33cyoqCAgILIuKsJKYH8Qc1r1Znh0sSaWtpjbTqm8Oa6XcMU8tQvD43xna4Bw04j/ACsTxp01MTFmk4EHULm7R3OKD0vRyZ2FUNVXyn70CGBh2Ol25v6Rr7wF6/Dz5dLXn17fz9Hny+3MRHo1HNAbTDTS+nksJvtLSrfvB/I35LFuW6cNV26sS6wrWVEBAQXQ7p5qohJvu5lRUEBAQWRcVYSU2/ej+YLUcszw7EjBVmH1i2GOMNcdmY9gXbXV+jyTfy4n3yxNSxRwSCJurrAnabJNIiJ0xXNa1omzmNjL2WdvEZmlcdPZ1ansjRwskqG9c5zYxq4tFzbw4X56KUiJnu3adQvxatNVLG1sYighbliiadGjbfxJ2k8VvLkm869IZx11DtdG6RvSCKajijbHiNPCZYD1mVlRYgFhB2OIOhFhfQ9q6Y6zeJ6Y7x84W1duLiAcyoMb2ua9gDXNc0tLSNoIPFc7TE8M0jTUdurEukKllRAQEF0O6eaqISb7uZUVBAQEE4zqVYSUtc3qgk8LKp+rr26n/T5y9oF267O0Lv3jtLxT7Xta7q/tHVn1zmjduv2+az1aa8uLccq6jK2NpYWkN1HLwUtxuG8e96lqTySuAznR2oAFguczPq70rWOFc5vK4jUX0UnlqvDYw+sfRtqXRuLJJIera5uhF3NJ/ILriyTjidc6+qt7pBVjEZKXEHfez0zRO7vSsu0n3gNPvVyz1T1+/wD76/v/ALSzkOPqriQrUUQEBBdDunmqiEm+7mVFQQEBBlpsUSWxSxPmmAY4Ny+tmOwWWqxMyxktFa93WoxTvxV327MaaCOSV7Y3WLxluGg8Lld411+16PN3jF7PM6ZdjWEXsOjdOB2GpkKedj/B85X7vm582fhB+/MJy29HKe3Z9pksnnY/wfOT7vl/Mn4QwcbwknXo5THnUSfqnnY/wfOT7vl/Nn4QfvrCP9t03/Yk/VPOx/g+cr5Gb82fhDBxrCCLejdN7qiT9U87H+CPjJ5Gb82fhDj1Mkb5XGCN0cRJLWOdmLfC/Feedb7PVETEd1XBRWEBAQEF0O6eaqK3m7jzUVFAQEBB0cPhqwwyxUU8zHiwcyMkHXXWy60rfmIcMs0mYibREw1XTP11tmblPiL/APgXOZdYrCk7VGiyBZAAJ2ICCyGnnqCWwQySkC5DGl1vJaitrcQza1a/+p0TwTU7sk8UkTrXyvaWn81JiYnUrExPeFSiiAgILI3Wb70EHbTzQYQEBAQe7Zjdfg/QHCZMNqDDI6oka4hrXXGZx4gr6fXfF4SlqTrcz9XzreDx5fEWtkjcdjoC0PwHHmCIPkcwBgy3N8rtivgadeLJ2214vFN8lLe5ViFPJS/s5p4ainMUzazUPbZwBLlnJimng46o1O2q45+9Tk3207HQvDqb0VfBVNb1mJmTKS0XAy2Fj7iV6PB+HrOD2v7tuXiqXtnrev8Aa5fQqkp6CjxfE6ymZPUUAc1jJBcAtBJ95ItdcPB4YrXJktG5r9HXxdb5OmlZ1E8rXdIcKx2lpHV1NDBiUVWzq2RRkZm5m/ita23Q32cE87FmiOqNW36ONPCXwzMUmZrMer0OJR0uHYvWdIqyJpip6VscTA0es4k30t4tHvK9uXDXHe2a0dohxpgvbFGKJ9dy+a0/SDEaPEajEKKcQTzk5y1jSLE3sAQV8Wua9LTes6mX0r+Gx3pGO8biHY/aRM6fF6V7zdxo2XPadV6ftCP6kfo5eCw+VSY/y8ivA9ggICCTdiDDtp5oMICAgIPS1rjJ0JwyNgLi2oebAX4uX08kb8Dj175+rrOOIpFve2OhlX9losWfG8xyCEEOvxs6y6fZs9NMs/4/cx0i8TM+jamxKpxDotSOqHCoqpKrLZ8bSCNRsta66zkvl8JWZ72mSMUdETHO3TmxLDIsVw2jimmY+l9SOKLVmoy2cTroPmvVbJ4euemKJnce7j/bpOLF1xVU6op5B0ioqY2nnc5zWNIGcmMf3vfms6pbz8VeZ/b9zyazNojmHEo8Ogw6gbLicLY601cfUuz/AIQ5t9mnavFj8NXDji2WNW3Gvkz5XTXdnp5sTbWYpUYXNK0wSU9xcCzgdv5fJfSm8ZM9sMz2mG4wU65o+cVkBjqpomRkZHFuUHNa3ivzeSk1vNdcPNManTtdOH9ZiVMRrakYPmvb9px/Ur+kOmWkUnUPNr5rkICAgk3YgPFnOHigigICAg36XF62lhbDBLlY29hYc16cfi8uOsVrPZuMlojUNVk8kbXtje5oeLOAO1cIvMb0xtJlXOxjWMle1rTmaA7QHtVjJeIiInheqeNoGeV0vWl7usvfPfW/NTrt1dW+5v1TbWVDZDI2aQPIsXB5ufetebeJ3E9zc8j6ueRzXSTSPLTduZ5Nils2S3Mk2mWTWVBm64zSdaBYPza25q+dk6urc7Oqd7SpsQqaWZ80UpEjxZzjrdXHnyY7Tas95WLTE7hGrrJqyXrKh2d1rA+Czly3y26rSWtNp3LXXNkQEBBZG24QYk33cygggICAgICAgICAgICAgICAgILYt33oiMm+7mUVBAQEBAQEBAQEBAQEBAQEBAQXRbvvQQk33cygggICAgICAgICAgICAgICAgILYt33oPoh6BYUdTUVvxs+lBj0Bwr2it+Nn0oHoDhXtFb8bPpQPQHCvaK342fSgegOFe0Vvxs+lA9AcK9orfjZ9KB6A4V7RW/Gz6UD0Bwr2it+Nn0oHoDhXtFb8bPpQeL6SYdDhWLS0lO6R0bACDIQTqPABBy0BAQEBAQEBBZHsQf/2Q==" // 👈 Put your image in public/profile.png
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
      />

      {/* Name / Title */}
      <h1 className="text-5xl font-bold mb-2">CHEV JEN</h1>
      <p className="text-lg opacity-90 mb-8">💻 Programmer | Developer | Creator</p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform">
          Hire Me
        </button>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 font-semibold transition-colors">
          View Projects
        </button>
      </div>

      {/* Decorative wave / footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

