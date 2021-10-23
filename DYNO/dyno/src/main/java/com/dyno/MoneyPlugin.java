package com.dyno;

import org.bukkit.plugin.java.JavaPlugin;

/**
 * Hello world!
 *
 */
public class MoneyPlugin extends JavaPlugin {
    @Override
    public void onEnable() {
        getLogger().info("onEnable is called!");
    }


    @Override
    public void onDisable() {
        getLogger().info("onDisable is called!");
    }
}
