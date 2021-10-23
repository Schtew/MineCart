package com.dyno;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.HumanEntity;

public class CommandListener implements CommandExecutor {
    private GUIs guis = new GUIs();
   
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        guis.getChest5().show((HumanEntity)sender);
        sender.sendMessage("onEnable is called!");
        return(true);
    }
    
}
