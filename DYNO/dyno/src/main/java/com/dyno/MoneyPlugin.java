package com.dyno;

import org.bukkit.event.Listener;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.JavaPlugin;

/**
 * Hello world!
 *
 */
public class MoneyPlugin extends JavaPlugin {
    @Override
    public void onEnable() {
        getLogger().info("onEnable is called!");
        this.getCommand("show").setExecutor(new CommandListener());
        getServer().getPluginManager().registerEvents((new Join()), this);
        getServer().getPluginManager().registerEvents((new EventOne()), this);
    }

    @Override
    public void onDisable() {
        getLogger().info("onDisable is called!");
    }
}
