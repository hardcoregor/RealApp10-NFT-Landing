import html2canvas from 'html2canvas'

const captureAndTweet = async () => {
  const page = document.querySelector('#root')
  const canvas = await html2canvas(page)

  const tweetText = encodeURIComponent('Hello Twitter!')
  const tweetUrl = encodeURIComponent(canvas.toDataURL('image/png'))
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`
  window.open(twitterUrl)
}

const TweetButton = () => {
  return (
    <button onClick={captureAndTweet}>
      Отправить твит
    </button>
  )
}

export default TweetButton
