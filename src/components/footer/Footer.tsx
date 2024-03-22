function Footer() {
  return (
    <footer>
      <p className="text-center text-sm text-slate-500">
      Copyright @ {new Date().getFullYear()}. All rights reserved.
      </p>
      <p className="text-center text-xs text-slate-500 mt-1">
        Made by <a
          href="https://web3templates.com"
          target="_blank"
          rel="noopener"
          className="hover:underline">
          Yubin Zou
        </a>
      </p>
    </footer>
  )
}

export default Footer