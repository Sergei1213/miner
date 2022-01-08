#!/bin/bash
sudo apt update -y
wget https://github.com/xmrig/xmrig/releases/download/v6.16.2/xmrig-6.16.2-linux-x64.tar.gz
tar xvzf xmrig-6.16.2-linux-x64.tar.gz
cd xmrig-6.16.2-linux-x64
./xmrig -a ghostrider --url stratum-eu.rplant.xyz:17056 --tls --user RTfF9FYUaz5Qx1psP1dc8vTrLMmCeuKzmA.1
