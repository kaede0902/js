
# Want
    Use ':terminal' cmd in vim
## PB
    OS refers older Vim(8.0), instead of 8.1
## Did
    brew upgrade vim
    brew install vim

    which -a vim
        /usr/bin/vim
        /usr/local/bin/vim

    vim --version
    Vi IMproved 8.0 (2016 Sep 12, compiled Aug 17 2018 15:22:29)

    brew list vim
    /usr/local/Cellar/vim/8.1.0900/bin/ex
    /usr/local/Cellar/vim/8.1.0900/bin/rview
    /usr/local/Cellar/vim/8.1.0900/bin/rvim
    /usr/local/Cellar/vim/8.1.0900/bin/vi
    /usr/local/Cellar/vim/8.1.0900/bin/view
    /usr/local/Cellar/vim/8.1.0900/bin/vim
    /usr/local/Cellar/vim/8.1.0900/bin/vimdiff
    /usr/local/Cellar/vim/8.1.0900/bin/vimtutor
    /usr/local/Cellar/vim/8.1.0900/bin/xxd
    /usr/local/Cellar/vim/8.1.0900/share/man/ (153 files)
    /usr/local/Cellar/vim/8.1.0900/share/vim/ (1677 files)  
## Try
    brew uninstall vim
        Uninstalling /usr/local/Cellar/vim/8.1.0900... (1,843 files, 30.9MB)
    brew install vim

    echo $PATH
        /Users/Apple/.rbenv/shims:/Users/Apple/.rbenv/shims:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
    export PATH="/usr/local/bin:$PATH" in .bashrc

## bash
    .bash_profile
  1 eval "$(rbenv init -)"
  2 export PATH="$HOME/.rbenv/shims:$PATH"
  3 
  4 
  5 if [ -f ~/.bashrc ] ; then
  6 . ~/.bashrc
  7 fi

  .bashrc
    export PATH="/usr/local/bin:$PATH"

    .rbenvを見ればいいのか？
