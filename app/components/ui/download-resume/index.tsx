'use client'

export const DownloadResumeButton = ({ text }: { text: string }) => {
  const download = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'joao_victor_cv.txt'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={download}
      className="px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-500"
    >
      Download CV
    </button>
  )
}
