package com.dyno;

import java.sql.SQLException;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.HumanEntity;

public class CommandListener implements CommandExecutor {
   
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        try {
            GUIs.getMainGUI().show((HumanEntity)sender);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return(true);
    }
    
}
